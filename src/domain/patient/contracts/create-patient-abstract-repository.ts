import { PatientEntity } from '../entities/patient-entity';

export abstract class CreatePatientAbstractRepository {
  abstract create(patient: PatientEntity): Promise<PatientEntity>;
  abstract findAll(): Promise<PatientEntity[]>;
}
