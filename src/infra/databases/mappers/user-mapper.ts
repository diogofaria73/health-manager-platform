import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { UserEntity as DomainUser } from '@/domain/user/entities/user-entity';
import { Prisma, User as PrismaUser } from '@prisma/client';

export class UserDataStructureMapper {
  static fromPersistanceToDomain(raw: PrismaUser): DomainUser {
    return DomainUser.create(
      {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        isActive: raw.isActive,
        roles: raw.roles,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static fromDomainToPersistance(
    user: DomainUser,
  ): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
      isActive: user.isActive,
      roles: user.roles,
    };
  }
}
