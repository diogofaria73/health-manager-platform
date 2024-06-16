import { DatabaseModule } from '@/infra/databases/prisma/database.module';
import { Module } from '@nestjs/common';
import { CreatePatientController } from './actions/create-patient-controller';
import { CreatePatientUseCase } from '@/domain/patient/use-cases/create-patient-use-case';
import { CreatePatientConcreteRepository } from '@/infra/databases/repositories/patient/create-patient-concrete-repository';
import { CreatePatientAbstractRepository } from '@/domain/patient/contracts/create-patient-abstract-repository';
import { ListAllPatientsController } from './actions/list-all-patient-controller';
import { ListAllPatientsUseCase } from '@/domain/patient/use-cases/list-all-patients-use-case';
import { ListPatientsConcreteRepository } from '@/infra/databases/repositories/patient/list-patients-concrete-repository';
import { ListPatientAbstractRepository } from '@/domain/patient/contracts/list-patient-abstract-repository';

@Module({
  imports: [DatabaseModule],
  controllers: [CreatePatientController, ListAllPatientsController],
  providers: [
    CreatePatientUseCase,
    ListAllPatientsUseCase,
    CreatePatientConcreteRepository,
    {
      provide: CreatePatientAbstractRepository,
      useClass: CreatePatientConcreteRepository,
    },
    ListPatientsConcreteRepository,
    {
      provide: ListPatientAbstractRepository,
      useClass: ListPatientsConcreteRepository,
    },
  ],
  exports: [],
})
export class PatientModule {}
