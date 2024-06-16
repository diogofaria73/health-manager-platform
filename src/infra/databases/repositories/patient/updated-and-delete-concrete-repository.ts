import { PrismaService } from '../../prisma/service/prisma.service';
import { PatientEntity } from '@/domain/patient/entities/patient-entity';
import { PatientDataStructureMapper } from '../../mappers/patient-mapper';
import { Injectable } from '@nestjs/common';
import { UpdateAndDeleteAbstractRepository } from '@/domain/patient/contracts/update-and-delete-abstract-repository';

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

  async update(patient: PatientEntity): Promise<PatientEntity> {
    const { id } = patient;

    //  const updated_patient = await this.prisma.patient.update({
    //    data: {
    //      name: patient.name,
    //      email: patient.email,
    //      phone: patient.phone,
    //      isActive: patient.isActive,
    //    },
    //    where: {
    //      id: id,
    //    },
    //  });

    throw new Error('Method not implemented.');
  }
}
