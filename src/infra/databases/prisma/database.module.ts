import { Module } from '@nestjs/common';
import { PrismaService } from './service/prisma.service';
import { PatientConcreteRepository } from '../repositories/patient/patient-concrete-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, PatientConcreteRepository],
  exports: [PrismaService],
})
export class DatabaseModule {}
