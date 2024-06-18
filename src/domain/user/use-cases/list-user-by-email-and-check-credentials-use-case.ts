import { Injectable } from '@nestjs/common';
import { ListUserAbstractRepository } from '../contracts/list-user-abstract-repository';
import { Either, left, right } from '@/core/either';
import { UsersNotFound } from './error-messages/user-not-found-error-message';
import { compare } from 'bcryptjs';
import { UsersCredentialsInvalid } from './error-messages/user-credentials-invalid';
import { JwtService } from '@nestjs/jwt';

type userTokenUseCaseResponse = Either<
  UsersNotFound,
  {
    access_token: string;
  }
>;

@Injectable()
export class ListUserByEmailAndCheckCredentialsUseCase {
  constructor(
    private readonly listUserAbstractRepository: ListUserAbstractRepository,
    private readonly jwt: JwtService,
  ) {}

  async execute(
    email: string,
    password: string,
  ): Promise<userTokenUseCaseResponse> {
    const user = await this.listUserAbstractRepository.listByEmail(email);

    if (!user) {
      return left(new UsersCredentialsInvalid());
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return left(new UsersCredentialsInvalid());
    }

    const token = this.jwt.sign({ sub: user.id });

    return right({ access_token: token });
  }
}
