import { PatientEntity } from '../entities/patient-entity';

export abstract class ListPatientAbstractRepository {
  abstract findAll(): Promise<PatientEntity[]>;
  abstract findById(id: string): Promise<PatientEntity | null>;
  abstract findByEmail(email: string): Promise<PatientEntity | null>;
}
