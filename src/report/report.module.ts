import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  imports: [AuthModule],
})
export class ReportModule {}
