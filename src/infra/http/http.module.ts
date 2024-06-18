import { Module } from '@nestjs/common';
import { DatabaseModule } from '../databases/prisma/database.module';
import { PatientModule } from './controllers/patient/patient.module';
import { UserModule } from './controllers/user/user.module';

@Module({
  imports: [DatabaseModule, PatientModule, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class HttpModule {}
