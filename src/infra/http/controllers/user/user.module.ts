import { CreateUserAbstractRepository } from '@/domain/user/contracts/create-user-abstract-repository';
import { ListUserAbstractRepository } from '@/domain/user/contracts/list-user-abstract-repository';
import { CreateUserUseCase } from '@/domain/user/use-cases/create-user-use-case';
import { DatabaseModule } from '@/infra/databases/prisma/database.module';
import { CreateUserConcreteRepository } from '@/infra/databases/repositories/user/create-user-concrete-repository';
import { ListUserConcreteRepository } from '@/infra/databases/repositories/user/list-users-concrete-repository';
import { Module } from '@nestjs/common';
import { CreateUserController } from './actions/crete-user-controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController],
  providers: [
    CreateUserUseCase,
    CreateUserConcreteRepository,
    {
      provide: CreateUserAbstractRepository,
      useClass: CreateUserConcreteRepository,
    },
    ListUserConcreteRepository,
    {
      provide: ListUserAbstractRepository,
      useClass: ListUserConcreteRepository,
    },
  ],
  exports: [],
})
export class UserModule {}
