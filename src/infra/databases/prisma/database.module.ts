import { Module } from '@nestjs/common';
import { PrismaService } from './service/prisma.service';
// import { CreatePatientConcreteRepository } from '../repositories/patient/create-patient-concrete-repository';
// import { CreateUserConcreteRepository } from '../repositories/user/create-user-concrete-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    // CreatePatientConcreteRepository,
    // CreateUserConcreteRepository,
  ],
  exports: [PrismaService],
})
export class DatabaseModule {}
