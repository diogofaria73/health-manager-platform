import { CreateUserUseCase } from '@/domain/user/use-cases/create-user-use-case';
import { UserAlreadyExistsError } from '@/domain/user/use-cases/error-messages/user-already-exists-error-message';
import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Post,
} from '@nestjs/common';
import { z } from 'zod';

const createUserBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  roles: z.array(z.string()),
});

type CreateUserBodySchema = z.infer<typeof createUserBodySchema>;

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post('create')
  async handle(@Body() body: CreateUserBodySchema) {
    const { name, email, password, roles } = body;

    const result = await this.createUserUseCase.execute({
      name,
      email,
      password,
      roles,
    });

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case UserAlreadyExistsError:
          return new ConflictException(error);
        default:
          return new BadRequestException(error.message);
      }
    }

    return { user: result.value.user };
  }
}
