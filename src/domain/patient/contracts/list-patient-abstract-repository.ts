import { PatientEntity } from '../entities/patient-entity';

export abstract class ListPatientAbstractRepository {
  abstract listAll(): Promise<PatientEntity[]>;
  abstract listById(id: string): Promise<PatientEntity | null>;
  abstract listByEmail(email: string): Promise<PatientEntity | null>;
}
