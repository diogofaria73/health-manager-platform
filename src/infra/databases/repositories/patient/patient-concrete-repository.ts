import { PatientAbstractRepository } from '@/domain/patient/contracts/patient-abstract-repository';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PatientEntity } from '@/domain/patient/entities/patient-entity';
import { PatientDataStructureMapper } from '../../mappers/patient-mapper';

export class PatientConcreteRepository implements PatientAbstractRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(patient: PatientEntity): Promise<PatientEntity> {
    const data = PatientDataStructureMapper.fromDomainToPersistance(patient);

    const result = await this.prisma.patient.create({
      data,
    });

    return PatientDataStructureMapper.fromPersistanceToDomain(result);
  }

  async findAll(): Promise<PatientEntity[]> {
    const patients = await this.prisma.patient.findMany();

    return patients
      ? patients.map((patient) =>
          PatientDataStructureMapper.fromPersistanceToDomain(patient),
        )
      : [];
  }

  async findByEmail(email: string): Promise<PatientEntity | null> {
    const patient = await this.prisma.patient.findUnique({
      where: {
        email,
      },
    });

    return patient
      ? PatientDataStructureMapper.fromPersistanceToDomain(patient)
      : null;
  }
}
