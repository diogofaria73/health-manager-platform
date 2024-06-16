import { PatientEntity } from '../entities/patient-entity';

export abstract class CreatePatientAbstractRepository {
  abstract create(patient: PatientEntity): Promise<PatientEntity>;
  abstract findAll(): Promise<PatientEntity[]>;
  abstract findByEmail(email: string): Promise<PatientEntity | null>;
  // abstract update(patient: PatientEntity): Promise<PatientEntity>;
  // abstract delete(id: string): Promise<PatientEntity>;
  // abstract findById(id: string): Promise<PatientEntity>;
}
