import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NotificationsService } from './notification.service';

@Injectable()
export class NotificationsScheduler {
  constructor(private readonly notifications: NotificationsService) {}

  /** Run at 08:00 and 20:00 server time */
  @Cron('0 8,20 * * *')
  async twiceDailyInventoryAlerts() {
    await this.notifications.checkAndNotifyAllPharmacies();
  }
}
