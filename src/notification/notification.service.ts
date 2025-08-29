import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { FirebaseAdminService } from './firebase-admin.service';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(
    private prisma: PrismaService,
    private firebaseService: FirebaseAdminService,
  ) {}

  async saveToken(userId: number, token: string) {
    return this.prisma.notificationToken.upsert({
      where: { token },
      create: { user_id: userId, token },
      update: { user_id: userId },
    });
  }

  async removeToken(token: string) {
    return this.prisma.notificationToken.deleteMany({ where: { token } });
  }

  async getUserTokens(userId: number) {
    return this.prisma.notificationToken.findMany({
      where: { user_id: userId },
    });
  }

  /** 🔔 Scheduled job: twice per day */
  @Cron('0 9,18 * * *') // 9 AM & 6 PM
  async scheduledInventoryChecks() {
    const pharmacies = await this.prisma.pharmacy.findMany({
      select: { id: true },
    });
    for (const pharmacy of pharmacies) {
      await this.checkLowStockAndExpiry(pharmacy.id);
    }
  }

  /** 🔔 Manual trigger (after sale, etc.) */
  async checkLowStockAndExpiry(pharmacy_id: number) {
    this.logger.log(`Checking stock/expiry for pharmacy ${pharmacy_id}`);

    // 1. Low stock (threshold = 5 if not defined)
    const lowStock = await this.prisma.inventory.findMany({
      where: {
        pharmacy_id,
        quantity: { lt: 5 },
      },
      select: { id: true, medicine_id: true, quantity: true },
    });

    // 2. Expiring soon (7 days)
    const expiringSoon = await this.prisma.inventory.findMany({
      where: {
        pharmacy_id,
        expiry_date: { lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
      },
      select: { id: true, medicine_id: true, expiry_date: true },
    });

    if (lowStock.length === 0 && expiringSoon.length === 0) return;

    // Notify all pharmacy users
    const users = await this.prisma.user.findMany({
      where: { pharmacy_id },
      select: { id: true },
    });

    for (const user of users) {
      const tokens = await this.getUserTokens(user.id);
      for (const t of tokens) {
        if (lowStock.length > 0) {
          await this.firebaseService.sendNotification(
            t.token,
            'Low Stock Alert',
            `Some medicines are below threshold in pharmacy ${pharmacy_id}`,
          );
        }
        if (expiringSoon.length > 0) {
          await this.firebaseService.sendNotification(
            t.token,
            'Expiry Alert',
            `Some medicines will expire soon in pharmacy ${pharmacy_id}`,
          );
        }
      }
    }
  }
  async sendPharmacyAlerts(
    pharmacy_id: number,
    lowStock: number,
    nearExpiry: number,
  ) {
    const users = await this.prisma.user.findMany({
      where: {
        pharmacy_id,
        fcm_token: { not: null },
      },
      select: { fcm_token: true },
    });

    const tokens = users.map((u) => u.fcm_token).filter(Boolean);

    if (!tokens.length) {
      this.logger.log(`No notification tokens for pharmacy ${pharmacy_id}`);
      return;
    }

    const title = 'Inventory Alerts';
    const body = `Low stock: ${lowStock}, Near expiry: ${nearExpiry}`;

    for (const token of tokens) {
      try {
        if(token){
          await this.firebaseService.sendNotification(token, title, body, {
            pharmacy_id: String(pharmacy_id),
          });
        }
      } catch (err) {
        this.logger.error(`Failed to send notification to token ${token}`, err);
      }
    }
  }

  /** Run through all pharmacies and trigger alerts */
  async checkAndNotifyAllPharmacies() {
    const pharmacies = await this.prisma.pharmacy.findMany({
      select: { id: true },
    });
    for (const pharmacy of pharmacies) {
      const lowStock = await this.prisma.inventory.count({
        where: { pharmacy_id: pharmacy.id, quantity: { lt: 5 } },
      });

      const nearExpiry = await this.prisma.inventory.count({
        where: {
          pharmacy_id: pharmacy.id,
          expiry_date: {
            lte: new Date(new Date().setDate(new Date().getDate() + 7)),
          },
        },
      });

      if (lowStock || nearExpiry) {
        await this.sendPharmacyAlerts(pharmacy.id, lowStock, nearExpiry);
      }
    }
  }
}
