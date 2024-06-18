import { Injectable } from '@nestjs/common';
import { ListUserAbstractRepository } from '../contracts/list-user-abstract-repository';
import { Either, left, right } from '@/core/either';
import { UserEntity } from '../entities/user-entity';
import { UsersNotFound } from './error-messages/user-not-found-error-message';

type listUserUseCaseResponse = Either<
  UsersNotFound,
  {
    user: UserEntity;
  }
>;

@Injectable()
export class ListUserByIdUseCase {
  constructor(
    private readonly listUserAbstractRepository: ListUserAbstractRepository,
  ) {}

  async execute(id: string): Promise<listUserUseCaseResponse> {
    const user = await this.listUserAbstractRepository.listById(id);

    if (!user) {
      return left(new UsersNotFound());
    }

    return right({ user });
  }
}
