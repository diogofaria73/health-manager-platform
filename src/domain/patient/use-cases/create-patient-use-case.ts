import { Either, left, right } from '@/core/either';
import { CreatePatientAbstractRepository } from '../contracts/create-patient-abstract-repository';
import { PatientEntity } from '../entities/patient-entity';
import { PatientAlreadyExistsError } from './error-messages/patient-already-exists-error-message';
import { Injectable } from '@nestjs/common';

interface CreatePatientUseCaseRequest {
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
}

type createPatientUseCaseResponse = Either<
  PatientAlreadyExistsError,
  {
    patient: PatientEntity;
  }
>;

@Injectable()
export class CreatePatientUseCase {
  constructor(
    private readonly patientRepository: CreatePatientAbstractRepository,
  ) {}

  async execute(
    data: CreatePatientUseCaseRequest,
  ): Promise<createPatientUseCaseResponse> {
    const { email } = data;

    const patientAlreadyExists =
      await this.patientRepository.findByEmail(email);

    if (patientAlreadyExists) {
      return left(new PatientAlreadyExistsError(data.email));
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
