import { CreateUserAbstractRepository } from '@/domain/user/contracts/create-user-abstract-repository';
import { ListUserAbstractRepository } from '@/domain/user/contracts/list-user-abstract-repository';
import { CreateUserUseCase } from '@/domain/user/use-cases/create-user-use-case';
import { DatabaseModule } from '@/infra/databases/prisma/database.module';
import { CreateUserConcreteRepository } from '@/infra/databases/repositories/user/create-user-concrete-repository';
import { ListUserConcreteRepository } from '@/infra/databases/repositories/user/list-users-concrete-repository';
import { Module } from '@nestjs/common';
import { CreateUserController } from './actions/crete-user-controller';
import { UpdateAndDeleteConcreteRepository } from '@/infra/databases/repositories/patient/updated-and-delete-concrete-repository';
import { ListAllUsersController } from './actions/list-all-users-controller';
import { ListAllUsersUseCase } from '@/domain/user/use-cases/list-all-users-use-case';
import { DeleteUserUseCase } from '@/domain/user/use-cases/delete-user-use-case';
import { DeleteUserController } from './actions/delete-user-by-id-controller';
import { UpdateAndDeleteUserAbstractRepository } from '@/domain/user/contracts/update-and-delete-user-abstract-repository';
import { UpdateAndDeleteUserConcreteRepository } from '@/infra/databases/repositories/user/updated-and-delete-user-concrete-repository';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateUserController,
    ListAllUsersController,
    DeleteUserController,
  ],
  providers: [
    CreateUserUseCase,
    CreateUserConcreteRepository,
    {
      provide: CreateUserAbstractRepository,
      useClass: CreateUserConcreteRepository,
    },
    ListAllUsersUseCase,
    ListUserConcreteRepository,
    {
      provide: ListUserAbstractRepository,
      useClass: ListUserConcreteRepository,
    },
    DeleteUserUseCase,
    UpdateAndDeleteConcreteRepository,
    {
      provide: UpdateAndDeleteUserAbstractRepository,
      useClass: UpdateAndDeleteUserConcreteRepository,
    },
  ],
  exports: [],
})
export class UserModule {}
