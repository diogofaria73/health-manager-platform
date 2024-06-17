import { Injectable } from '@nestjs/common';
import { UpdateAndDeleteAbstractRepository } from '../contracts/update-and-delete-abstract-repository';
import { ListPatientAbstractRepository } from '../contracts/list-patient-abstract-repository';
import { Either, left, right } from '@/core/either';
import { PatientsNotFound } from './error-messages/patients-not-found-error-message';
import { PatientEntity } from '../entities/patient-entity';

type deletePatientUseCaseResponse = Either<
  PatientsNotFound,
  {
    patient: PatientEntity;
  }
>;

@Injectable()
export class DeletePatientUseCase {
  constructor(
    private readonly listPatientRepository: ListPatientAbstractRepository,
    private readonly updatedAndDeleteRepository: UpdateAndDeleteAbstractRepository,
  ) {}

  async execute(id: string): Promise<deletePatientUseCaseResponse> {
    const isPatientExist = await this.listPatientRepository.listById(id);

    if (!isPatientExist) {
      return left(new PatientsNotFound());
    }

    const response = await this.updatedAndDeleteRepository.delete(id);

    return right({ patient: response });
  }
}
