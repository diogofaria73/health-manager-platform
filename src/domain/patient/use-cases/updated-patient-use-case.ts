import { Injectable } from '@nestjs/common';
import { UpdateAndDeleteAbstractRepository } from '../contracts/update-and-delete-abstract-repository';
import { ListPatientAbstractRepository } from '../contracts/list-patient-abstract-repository';
import { Either, left, right } from '@/core/either';
import { PatientsNotFound } from './error-messages/patients-not-found-error-message';
import { PatientEntity } from '../entities/patient-entity';

interface UpdatePatientUseCaseRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
}

type updatedPatientUseCaseResponse = Either<
  PatientsNotFound,
  {
    patient: PatientEntity;
  }
>;

@Injectable()
export class UpdatePatientUseCase {
  constructor(
    private readonly listPatientRepository: ListPatientAbstractRepository,
    private readonly updatedAndDeleteRepository: UpdateAndDeleteAbstractRepository,
  ) {}

  async execute(
    patient: UpdatePatientUseCaseRequest,
  ): Promise<updatedPatientUseCaseResponse> {
    const { id } = patient;

    const isPatientExist = await this.listPatientRepository.listById(id);

    if (!isPatientExist) {
      return left(new PatientsNotFound());
    }

    const response = await this.updatedAndDeleteRepository.update(patient);

    return right({ patient: response });
  }
}
