import { PatientEntity } from '../entities/patient-entity';
import { UpdatePatientEntity } from '../entities/update-patient-entity';

export abstract class UpdateAndDeleteAbstractRepository {
  abstract update(patient: UpdatePatientEntity): Promise<PatientEntity>;
  abstract delete(id: string): Promise<PatientEntity>;
}
