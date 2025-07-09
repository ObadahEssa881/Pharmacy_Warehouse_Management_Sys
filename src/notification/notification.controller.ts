import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { GetUser } from '../common/decorators/get‑user.decorator';
import { User } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
@Roles('PHARMACY_OWNER')
@UseGuards(JwtGuard, RoleGuard)
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
    @GetUser() user: User,
  ) {
    return this.notificationService.createNotification(
      user.id,
      createNotificationDto,
    );
  }

  @Get()
  async getNotifications(@GetUser() user: User) {
    return this.notificationService.getUserNotifications(user.id);
  }

  @Patch(':id/read')
  async markAsRead(@Param('id') id: string) {
    return this.notificationService.markAsRead(parseInt(id));
  }
}
