import { PrismaService } from '../../prisma/service/prisma.service';
import { Injectable } from '@nestjs/common';
import { ListUserAbstractRepository } from '@/domain/user/contracts/list-user-abstract-repository';
import { UserEntity } from '@/domain/user/entities/user-entity';
import { UserDataStructureMapper } from '../../mappers/user-mapper';

@Injectable()
export class ListUserConcreteRepository implements ListUserAbstractRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return user ? UserDataStructureMapper.fromPersistanceToDomain(user) : null;
  }

  async listAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();

    return users
      ? users.map((user) =>
          UserDataStructureMapper.fromPersistanceToDomain(user),
        )
      : [];
  }

  async listById(id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    return user ? UserDataStructureMapper.fromPersistanceToDomain(user) : null;
  }
}
