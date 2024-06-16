import { PatientEntity } from '@/domain/patient/entities/patient-entity';

export class PatientPresenter {
  static toHttp(patient: PatientEntity) {
    return {
      id: patient.id,
      name: patient.name,
      email: patient.email,
      phone: patient.phone,
    };
  }
}
