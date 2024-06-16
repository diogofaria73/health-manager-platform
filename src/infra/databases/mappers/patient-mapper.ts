import { Prisma } from '@prisma/client';
import { PatientEntity } from '@/domain/patient/entities/patient-entity';
import { Patient as PatientPersistence } from '@prisma/client';

export class PatientDataStructureMapper {
  static fromPersistanceToDomain(raw: PatientPersistence): PatientEntity {
    const { name, email, phone, isActive } = raw;

    return PatientEntity.create({
      name: name,
      email: email,
      phone: phone,
      isActive: isActive,
    });
  }

  static fromDomainToPersistance(
    patient: PatientEntity,
  ): Prisma.PatientUncheckedCreateInput {
    return {
      id: patient.id.toString(),
      name: patient.name,
      email: patient.email,
      phone: patient.phone,
      isActive: patient.isActive,
    };
  }
}
