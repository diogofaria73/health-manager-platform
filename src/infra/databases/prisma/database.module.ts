import { Module } from '@nestjs/common';
import { PrismaService } from './service/prisma.service';
import { CreatePatientConcreteRepository } from '../repositories/patient/create-patient-concrete-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, CreatePatientConcreteRepository],
  exports: [PrismaService],
})
export class DatabaseModule {}
