import { DatabaseModule } from '@/infra/databases/prisma/database.module';
import { Module } from '@nestjs/common';
import { CreatePatientController } from './actions/create-patient-controller';
import { CreatePatientUseCase } from '@/domain/patient/use-cases/create-patient-use-case';
import { PatientConcreteRepository } from '@/infra/databases/repositories/patient/patient-concrete-repository';
import { PatientAbstractRepository } from '@/domain/patient/contracts/patient-abstract-repository';

@Module({
  imports: [DatabaseModule],
  controllers: [CreatePatientController],
  providers: [
    CreatePatientUseCase,
    PatientConcreteRepository,
    {
      provide: PatientAbstractRepository,
      useClass: PatientConcreteRepository,
    },
  ],
  exports: [],
})
export class PatientModule {}
