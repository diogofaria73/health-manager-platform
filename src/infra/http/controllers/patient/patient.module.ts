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
import { UpdateAndDeleteAbstractRepository } from '@/domain/patient/contracts/update-and-delete-abstract-repository';
import { UpdateAndDeleteConcreteRepository } from '@/infra/databases/repositories/patient/updated-and-delete-concrete-repository';
import { ListPatientByEmailUseCase } from '@/domain/patient/use-cases/list-patients-by-email-use-case';
import { ListPatientByIdUseCase } from '@/domain/patient/use-cases/list-patients-by-id-use-case';
import { ListPatientByEmailController } from './actions/list-patient-by-email-controller';
import { ListPatientByIdController } from './actions/list-patient-by-id-controller';
import { DeletePatientController } from './actions/delete-patient-by-id-controller';
import { DeletePatientUseCase } from '@/domain/patient/use-cases/delete-patient-use-case';
import { UpdatePatientUseCase } from '@/domain/patient/use-cases/updated-patient-use-case';
import { UpdatePatientController } from './actions/update-patient-controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreatePatientController,
    ListAllPatientsController,
    ListPatientByEmailController,
    ListPatientByIdController,
    DeletePatientController,
    UpdatePatientController,
  ],
  providers: [
    CreatePatientUseCase,
    ListAllPatientsUseCase,
    ListPatientByEmailUseCase,
    ListPatientByIdUseCase,
    DeletePatientUseCase,
    UpdatePatientUseCase,
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
    UpdateAndDeleteConcreteRepository,
    {
      provide: UpdateAndDeleteAbstractRepository,
      useClass: UpdateAndDeleteConcreteRepository,
    },
  ],
  exports: [],
})
export class PatientModule {}
