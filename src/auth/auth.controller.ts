import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import {
  SupplierSignInDto,
  SupplierSignUpDto,
} from './dto/supplier-signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('user/signup')
  signupUser(@Body() dto: SignUpDto) {
    return this.authService.signup(dto);
  }

  @Post('user/signin')
  signinUser(@Body() dto: SignInDto) {
    console.log(dto);
    return this.authService.signin(dto);
  }

  @Post('supplier/signup')
  signupSupplier(@Body() dto: SupplierSignUpDto) {
    return this.authService.signupSupplier(dto);
  }

  @Post('supplier/signin')
  signinSupplier(@Body() dto: SupplierSignInDto) {
    return this.authService.signinSupplier(dto);
  }
}
