import { Injectable } from '@nestjs/common';
import { UpdateAndDeleteUserAbstractRepository } from '../contracts/update-and-delete-user-abstract-repository';
import { Either, left, right } from '@/core/either';
import { UserEntity } from '../entities/user-entity';
import { UserUpdateErrorMessage } from './error-messages/user-update-error-message copy';
import { ListUserAbstractRepository } from '../contracts/list-user-abstract-repository';
import { UpdateUserEntity } from '../entities/update-user-entity';
import { hash } from 'bcryptjs';

type updateUserUseCaseResponse = Either<
  UserUpdateErrorMessage,
  { user: UserEntity }
>;

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private readonly updateUserAbstractRepository: UpdateAndDeleteUserAbstractRepository,
    private readonly listUserAbstractRepository: ListUserAbstractRepository,
  ) {}

  async execute(data: UpdateUserEntity): Promise<updateUserUseCaseResponse> {
    const { id } = data;

    const user_data = await this.listUserAbstractRepository.listById(id);

    if (!user_data) {
      return left(new UserUpdateErrorMessage('User not found'));
    }

    if (data.password) {
      // If the password is passed, it will be encrypted
      data.password = await hash(data.password, 8);
    } else {
      // If the new password is not passed, it will keep the old password data
      data.password = user_data.password;
    }

    const response = await this.updateUserAbstractRepository.update(data);

    return right({ user: response });
  }
}
