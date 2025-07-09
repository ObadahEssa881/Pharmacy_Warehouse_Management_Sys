import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
  Res,
  Put,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard, RoleGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
@Roles('PHARMACY_OWNER')
@UseGuards(JwtGuard, RoleGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.userService.findAll();

    // If no users found, return empty array with proper headers
    if (!Array.isArray(users)) {
      res.setHeader('Content-Range', `users 0-0/0`);
      res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      return res.json({ data: [], total: 0 });
    }

    // Remove password_hash from each user
    const sanitized = users.map(({ password_hash, ...rest }) => rest);
    const total = sanitized.length;

    res.setHeader('Content-Range', `users 0-${total - 1}/${total}`);
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    return res.json({ data: sanitized, total });
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }
  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(+id, dto);
  }
}
