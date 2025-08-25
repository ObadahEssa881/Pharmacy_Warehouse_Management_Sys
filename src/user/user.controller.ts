import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard, RoleGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
@Roles('PHARMACY_OWNER')
@UseGuards(JwtGuard, RoleGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.userService.findOne(email);
  }
  @Delete('delete/:email')
  remove(@Param('email') email: string) {
    return this.userService.remove(email);
  }
}
