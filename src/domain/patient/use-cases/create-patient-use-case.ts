import { Either, left, right } from '@/core/either';
import { PatientAbstractRepository } from '../contracts/patient-abstract-repository';
import { PatientEntity } from '../entities/patient-entity';
import { UserAlreadyExistsErrorMessage } from './error-messages/patient-already-exists-error-message';
import { Injectable } from '@nestjs/common';

interface CreatePatientUseCaseRequest {
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
}

type createPatientUseCaseResponse = Either<
  UserAlreadyExistsErrorMessage,
  {
    patient: PatientEntity;
  }
>;

@Injectable()
export class CreatePatientUseCase {
  constructor(private readonly patientRepository: PatientAbstractRepository) {}

  async execute(
    data: CreatePatientUseCaseRequest,
  ): Promise<createPatientUseCaseResponse> {
    const patientAlreadyExists = await this.patientRepository.findByEmail(
      data.email,
    );

    if (patientAlreadyExists) {
      return left(new UserAlreadyExistsErrorMessage(data.email));
    }

    const patient = PatientEntity.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      isActive: data.isActive,
    });

    const result = await this.patientRepository.create(patient);

    return right({ patient: result });
  }
}
