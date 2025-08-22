import { Body, Controller, Post, Delete, Req } from '@nestjs/common';
import { NotificationsService } from './notification.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('register-token')
  registerToken(@Req() req, @Body('token') token: string) {
    // assume userId comes from auth middleware (req.user.id)
    return this.notificationsService.saveToken(req.user.id, token);
  }

  @Delete('remove-token')
  removeToken(@Body('token') token: string) {
    return this.notificationsService.removeToken(token);
  }
}
