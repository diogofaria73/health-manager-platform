import { Injectable } from '@nestjs/common';
import { Either, left, right } from '@/core/either';
import { UserEntity } from '@/domain/user/entities/user-entity';
import { ListUserAbstractRepository } from '../contracts/list-user-abstract-repository';
import { UsersNotFound } from './error-messages/user-not-found-error-message';

type listUsersUseCaseResponse = Either<
  UsersNotFound,
  {
    users: UserEntity[];
  }
>;

@Injectable()
export class ListAllUsersUseCase {
  constructor(
    private readonly listUsersAbstractRepository: ListUserAbstractRepository,
  ) {}
  async execute(): Promise<listUsersUseCaseResponse> {
    const user_list = await this.listUsersAbstractRepository.listAll();

    if (!user_list) {
      return left(new UsersNotFound());
    }

    return right({ users: user_list });
  }
}
