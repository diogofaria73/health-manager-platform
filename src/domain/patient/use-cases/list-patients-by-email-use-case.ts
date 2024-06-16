import { Injectable } from '@nestjs/common';
import { Either, left, right } from '@/core/either';
import { PatientEntity } from '../entities/patient-entity';
import { PatientsNotFound } from './error-messages/patients-not-found-error-message';
import { ListPatientAbstractRepository } from '../contracts/list-patient-abstract-repository';

type createPatientUseCaseResponse = Either<
  PatientsNotFound,
  {
    patient: PatientEntity;
  }
>;

@Injectable()
export class ListPatientByEmailUseCase {
  constructor(
    private readonly patientRepository: ListPatientAbstractRepository,
  ) {}
  async execute(email: string): Promise<createPatientUseCaseResponse> {
    const patient = await this.patientRepository.listByEmail(email);

    if (!patient) {
      return left(new PatientsNotFound());
    }
    return right({ patient });
  }
}
