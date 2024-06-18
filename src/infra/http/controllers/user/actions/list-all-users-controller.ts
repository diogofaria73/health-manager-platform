import { PatientsNotFound } from '@/domain/patient/use-cases/error-messages/patients-not-found-error-message';
import { ListAllUsersUseCase } from '@/domain/user/use-cases/list-all-users-use-case';
import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { userPresenter } from '../presenter/user-data-presenter';

@Controller('users')
export class ListAllUsersController {
  constructor(private readonly listAllUsersUseCase: ListAllUsersUseCase) {}

  @Get('list-all')
  async handle() {
    const result = await this.listAllUsersUseCase.execute();

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case PatientsNotFound:
          return new NotFoundException(error);
        default:
          return new BadRequestException(error.message);
      }
    }

    const users = result.value.users;

    return { users_list: users.map(userPresenter.toHttp) };
  }
}
