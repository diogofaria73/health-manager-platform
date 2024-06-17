import { PrismaService } from '../../prisma/service/prisma.service';
import { PatientEntity } from '@/domain/patient/entities/patient-entity';
import { PatientDataStructureMapper } from '../../mappers/patient-mapper';
import { Injectable } from '@nestjs/common';
import { UpdateAndDeleteAbstractRepository } from '@/domain/patient/contracts/update-and-delete-abstract-repository';
import { UpdatePatientEntity } from '@/domain/patient/entities/update-patient-entity';

@Injectable()
export class UpdateAndDeleteConcreteRepository
  implements UpdateAndDeleteAbstractRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string): Promise<PatientEntity> {
    const patient = await this.prisma.patient.delete({
      where: {
        id: id,
      },
    });
    return PatientDataStructureMapper.fromPersistanceToDomain(patient);
  }

  async update(patient: UpdatePatientEntity): Promise<PatientEntity> {
    const { id } = patient;

    const patientUpdated = await this.prisma.patient.update({
      where: {
        id: id,
      },
      data: {
        name: patient.name,
        email: patient.email,
        phone: patient.phone,
        isActive: patient.isActive,
      },
    });

    return PatientDataStructureMapper.fromPersistanceToDomain(patientUpdated);
  }
}
