import {
  BadRequestException,
  Controller,
  Delete,
  NotFoundException,
  Param,
  UsePipes,
} from '@nestjs/common';
import { ZodPipeValidator } from '@/infra/utils/pipes/zod-pipe-validator';
import { z } from 'zod';
import { DeleteUserUseCase } from '@/domain/user/use-cases/delete-user-use-case';
import { UsersNotFound } from '@/domain/user/use-cases/error-messages/user-not-found-error-message';
import { UserPresenter } from '../presenter/user-data-presenter';

const deleteUserParamSchema = z.object({
  id: z.string().uuid() || z.string().cuid(),
});

type DeleteUserParamSchema = z.infer<typeof deleteUserParamSchema>;

@Controller('user')
@UsePipes(new ZodPipeValidator(deleteUserParamSchema))
export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  @Delete('delete/:id')
  async handle(@Param() params: DeleteUserParamSchema) {
    const { id } = params;
    const result = await this.deleteUserUseCase.execute(id);

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

    return { user_deleted: UserPresenter.toHttp(user) };
  }
}
