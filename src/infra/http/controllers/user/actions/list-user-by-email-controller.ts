import { UsersNotFound } from '@/domain/user/use-cases/error-messages/user-not-found-error-message';
import { ListUserByEmailUseCase } from '@/domain/user/use-cases/list-users-by-email-use-case';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { z } from 'zod';
import { UserPresenter } from '../presenter/user-data-presenter';

const listUserByEmailBodySchema = z.object({
  email: z.string().email(),
});

type ListUserByEmailBodySchema = z.infer<typeof listUserByEmailBodySchema>;

@Controller('user')
export class ListUserByEmailController {
  constructor(
    private readonly listUserByEmailUseCase: ListUserByEmailUseCase,
  ) {}

  @Get('list-by-email')
  async handle(@Body() body: ListUserByEmailBodySchema) {
    const { email } = body;

    const result = await this.listUserByEmailUseCase.execute(email);

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case UsersNotFound:
          return new NotFoundException(error);
        default:
          return new BadRequestException(error.message);
      }
    }

    const user = result.value.user;

    return { user: UserPresenter.toHttp(user) };
  }
}
