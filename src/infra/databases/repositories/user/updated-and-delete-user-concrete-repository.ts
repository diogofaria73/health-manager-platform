import { PrismaService } from '../../prisma/service/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateAndDeleteUserAbstractRepository } from '@/domain/user/contracts/update-and-delete-user-abstract-repository';
import { UserEntity } from '@/domain/user/entities/user-entity';
import { UserDataStructureMapper } from '../../mappers/user-mapper';
import { UpdateUserEntity } from '@/domain/user/entities/update-user-entity';

@Injectable()
export class UpdateAndDeleteUserConcreteRepository
  implements UpdateAndDeleteUserAbstractRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string): Promise<UserEntity> {
    const user = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return UserDataStructureMapper.fromPersistanceToDomain(user);
  }

  async update(user: UpdateUserEntity): Promise<UserEntity> {
    const { id } = user;

    const user_updated = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        isActive: user.isActive,
        roles: user.roles,
      },
    });

    return UserDataStructureMapper.fromPersistanceToDomain(user_updated);
  }
}
