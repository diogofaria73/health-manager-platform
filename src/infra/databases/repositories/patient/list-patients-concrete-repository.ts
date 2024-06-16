import { PrismaService } from '../../prisma/service/prisma.service';
import { PatientEntity } from '@/domain/patient/entities/patient-entity';
import { PatientDataStructureMapper } from '../../mappers/patient-mapper';
import { Injectable } from '@nestjs/common';
import { ListPatientAbstractRepository } from '@/domain/patient/contracts/list-patient-abstract-repository';

@Injectable()
export class ListPatientsConcreteRepository
  implements ListPatientAbstractRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<PatientEntity[]> {
    const patients = await this.prisma.patient.findMany();

    return patients
      ? patients.map((patient) =>
          PatientDataStructureMapper.fromPersistanceToDomain(patient),
        )
      : [];
  }

  async findByEmail(email: string): Promise<PatientEntity | null> {
    const patient = await this.prisma.patient.findFirst({
      where: {
        email: email,
      },
    });

    return patient
      ? PatientDataStructureMapper.fromPersistanceToDomain(patient)
      : null;
  }

  async findById(id: string): Promise<PatientEntity | null> {
    const patient = await this.prisma.patient.findFirst({
      where: {
        id: id,
      },
    });

    return patient
      ? PatientDataStructureMapper.fromPersistanceToDomain(patient)
      : null;
  }
}
