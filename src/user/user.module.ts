import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from '../prisma.module';
import { PrismaService } from '../prisma.service';
import { DMMFClass } from '@prisma/client/runtime';
import { Database, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';
import { authenticateUser } from './auth/user-auth.service'; // Import your user authentication function

AdminJS.registerAdapter({ Database, Resource });

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    AuthModule,
    PrismaModule,
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      AdminModule.createAdminAsync({
        imports: [PrismaModule],
        useFactory: (prisma: PrismaService) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const dmmf = (prisma as any)._baseDmmf as DMMFClass;

          return {
            adminJsOptions: {
              rootPath: '/admin/users',
              resources: [
                {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                  resource: { model: dmmf.modelMap['User'], client: prisma },
                  options: {},
                },
              ],
            },
            auth: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              authenticate: authenticateUser,
              cookieName: 'adminjs-users',
              cookiePassword: 'secret-users',
            },
            sessionOptions: {
              resave: true,
              saveUninitialized: true,
              secret: 'secret-users',
            },
          };
        },
        inject: [PrismaService],
      }),
    ),
  ],
})
export class UserModule {}

// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { AuthModule } from 'src/auth/auth.module';

// @Module({
//   controllers: [UserController],
//   providers: [UserService],
//   imports: [AuthModule],
// })
// export class UserModule {}
