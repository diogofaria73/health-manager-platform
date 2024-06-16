import { Prisma } from '@prisma/client';
import { PatientEntity as DomainPatient } from '@/domain/patient/entities/patient-entity';
import { Patient as PrismaPatient } from '@prisma/client';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

export class PatientDataStructureMapper {
  static fromPersistanceToDomain(raw: PrismaPatient): DomainPatient {
    return DomainPatient.create(
      {
        name: raw.name,
        email: raw.email,
        phone: raw.phone,
        isActive: raw.isActive,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static fromDomainToPersistance(
    patient: DomainPatient,
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
