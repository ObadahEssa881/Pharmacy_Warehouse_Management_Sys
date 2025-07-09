import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { addMonths } from 'date-fns';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  // Daily check for expired and low stock inventory
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async checkInventoryNotifications() {
    await this.checkExpiringInventory();
    await this.checkLowStockInventory();
  }

  // Check for items expiring in less than 2 months
  private async checkExpiringInventory() {
    const twoMonthsFromNow = addMonths(new Date(), 2);

    const expiringItems = await this.prisma.inventory.findMany({
      where: {
        expiry_date: {
          lte: twoMonthsFromNow,
        },
      },
      include: {
        medicine: true,
        pharmacy: true,
        warehouse: true,
      },
    });

    for (const item of expiringItems) {
      const location = item.pharmacy_id
        ? `Pharmacy: ${item.pharmacy?.name}`
        : `Warehouse: ${item.warehouse?.name}`;

      const userIds = await this.getUsersForLocation(
        item.pharmacy_id ?? undefined,
        item.warehouse_id ?? undefined,
      );

      for (const userId of userIds) {
        const notificationDto: CreateNotificationDto = {
          message: `Medicine ${item.medicine.name} is expiring soon on ${item.expiry_date.toISOString().split('T')[0]} at ${location}`,
          type: 'EXPIRY_ALERT',
        };
        await this.createNotification(userId, notificationDto);
      }
    }
  }

  // Check for items with quantity below 5
  private async checkLowStockInventory() {
    const lowStockItems = await this.prisma.inventory.findMany({
      where: {
        quantity: {
          lt: 5,
        },
      },
      include: {
        medicine: true,
        pharmacy: true,
        warehouse: true,
      },
    });

    for (const item of lowStockItems) {
      const location = item.pharmacy_id
        ? `Pharmacy: ${item.pharmacy?.name}`
        : `Warehouse: ${item.warehouse?.name}`;

      const userIds = await this.getUsersForLocation(
        item.pharmacy_id ?? undefined,
        item.warehouse_id ?? undefined,
      );

      for (const userId of userIds) {
        const notificationDto: CreateNotificationDto = {
          message: `Medicine ${item.medicine.name} is low in stock (Quantity: ${item.quantity}) at ${location}`,
          type: 'LOW_STOCK_ALERT',
        };
        await this.createNotification(userId, notificationDto);
      }
    }
  }

  // Helper method to get users associated with a specific pharmacy or warehouse
  private async getUsersForLocation(
    pharmacyId?: number,
    warehouseId?: number,
  ): Promise<number[]> {
    if (pharmacyId !== undefined) {
      const users = await this.prisma.user.findMany({
        where: { pharmacy_id: pharmacyId },
        select: { id: true },
      });
      return users.map((user) => user.id);
    }

    if (warehouseId !== undefined) {
      const supplier = await this.prisma.supplier.findFirst({
        where: { warehouseId },
        select: { id: true },
      });
      return supplier ? [supplier.id] : [];
    }

    return [];
  }

  // Create a new notification
  async createNotification(
    userId: number,
    notificationDto: CreateNotificationDto,
  ) {
    return this.prisma.notification.create({
      data: {
        user_id: userId,
        message: notificationDto.message,
        type: notificationDto.type,
        is_read: false,
      },
    });
  }

  // Get notifications for a specific user
  async getUserNotifications(userId: number) {
    return this.prisma.notification.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
    });
  }

  // Mark notification as read
  async markAsRead(notificationId: number) {
    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { is_read: true },
    });
  }
}
