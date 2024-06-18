import { Injectable } from '@nestjs/common';
import { Either, left, right } from '@/core/either';
import { UsersNotFound } from './error-messages/user-not-found-error-message';
import { UserEntity } from '../entities/user-entity';
import { UpdateAndDeleteUserAbstractRepository } from '../contracts/update-and-delete-user-abstract-repository';
import { ListUserAbstractRepository } from '../contracts/list-user-abstract-repository';

type deleteUserUseCaseResponse = Either<
  UsersNotFound,
  {
    user: UserEntity;
  }
>;

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly listUserAbstractRepository: ListUserAbstractRepository,
    private readonly updateAndDeleteUserAbstractRepository: UpdateAndDeleteUserAbstractRepository,
  ) {}

  async execute(id: string): Promise<deleteUserUseCaseResponse> {
    const isUserExists = await this.listUserAbstractRepository.listById(id);

    if (!isUserExists) {
      return left(new UsersNotFound());
    }

    const response =
      await this.updateAndDeleteUserAbstractRepository.delete(id);

    return right({ user: response });
  }
}
