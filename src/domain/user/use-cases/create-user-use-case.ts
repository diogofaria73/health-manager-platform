import { Either, left, right } from '@/core/either';
import { Injectable } from '@nestjs/common';
import { UserAlreadyExistsError } from './error-messages/user-already-exists-error-message';
import { UserEntity } from '../entities/user-entity';
import { CreateUserAbstractRepository } from '../contracts/create-user-abstract-repository';
import { ListUserAbstractRepository } from '../contracts/list-user-abstract-repository';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';

interface CreateUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
  roles: string[];
}

type createUserUseCaseResponse = Either<
  UserAlreadyExistsError,
  { user: UserEntity }
>;

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly createUserAbstractRepository: CreateUserAbstractRepository,
    private readonly listUserAbstractRepository: ListUserAbstractRepository,
    private readonly jwt: JwtService,
  ) {}

  async execute(
    data: CreateUserUseCaseRequest,
  ): Promise<createUserUseCaseResponse> {
    const { email } = data;

    const userAlreadyExists =
      await this.listUserAbstractRepository.listByEmail(email);

    if (userAlreadyExists) return left(new UserAlreadyExistsError(email));

    const hashed_password = await hash(data.password, 8);

    const user = UserEntity.create({
      name: data.name,
      email: data.email,
      password: hashed_password,
      isActive: true,
      roles: data.roles,
    });

    const result = await this.createUserAbstractRepository.create(user);

    return right({ user: result });
  }
}
