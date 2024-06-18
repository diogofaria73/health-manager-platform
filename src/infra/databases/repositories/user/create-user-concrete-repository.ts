import { CreateUserAbstractRepository } from '@/domain/user/contracts/create-user-abstract-repository';
import { UserEntity } from '@/domain/user/entities/user-entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/service/prisma.service';
import { UserDataStructureMapper } from '../../mappers/user-mapper';

@Injectable()
export class CreateUserConcreteRepository
  implements CreateUserAbstractRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(patient: UserEntity): Promise<UserEntity> {
    const data = UserDataStructureMapper.fromDomainToPersistance(patient);

    const result = await this.prisma.user.create({ data });

    return UserDataStructureMapper.fromPersistanceToDomain(result);
  }
}
