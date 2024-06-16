import { Module } from '@nestjs/common';
import { DatabaseModule } from '../databases/prisma/database.module';
import { PatientModule } from './controllers/patient/patient.module';

@Module({
  imports: [DatabaseModule, PatientModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class HttpModule {}
