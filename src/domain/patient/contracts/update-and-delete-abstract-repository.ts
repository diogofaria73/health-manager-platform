import { PatientEntity } from '../entities/patient-entity';

export abstract class UpdateAndDeleteAbstractRepository {
  abstract update(patient: PatientEntity): Promise<PatientEntity>;
  abstract delete(id: string): Promise<PatientEntity>;
}
