import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ZodPipeValidator } from '@/infra/utils/pipes/zod-pipe-validator';
import { z } from 'zod';
import { UpdateUserUseCase } from '@/domain/user/use-cases/update-user-use-case';
import { UserPresenter } from '../presenter/user-data-presenter';
import { UserAlreadyExistsError } from '@/domain/user/use-cases/error-messages/user-already-exists-error-message';

const updateUserBodySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string(),
  password: z.string().optional(),
  isActive: z.boolean(),
  roles: z.array(z.string()),
});

type UpdateUserBodySchema = z.infer<typeof updateUserBodySchema>;

@Controller('users')
@UsePipes(new ZodPipeValidator(updateUserBodySchema))
export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  @Put('update')
  async handle(@Body() body: UpdateUserBodySchema) {
    const { id, name, email, password, isActive, roles } = body;

    const result = await this.updateUserUseCase.execute({
      id,
      name,
      email,
      password,
      isActive,
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
    return { user_updated: UserPresenter.toHttp(result.value.user) };
  }
}
