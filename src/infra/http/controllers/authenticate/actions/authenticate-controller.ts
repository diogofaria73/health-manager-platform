import { UsersCredentialsInvalid } from '@/domain/user/use-cases/error-messages/user-credentials-invalid';
import { ListUserByEmailAndCheckCredentialsUseCase } from '@/domain/user/use-cases/list-user-by-email-and-check-credentials-use-case';
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { z } from 'zod';

const createUserSessionBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type CreateUserSessionBody = z.infer<typeof createUserSessionBodySchema>;

@Controller('authenticate')
export class AuthenticateController {
  constructor(
    private readonly jwt: JwtService,
    private readonly listUserByEmailAndCheckCredentialsUseCase: ListUserByEmailAndCheckCredentialsUseCase,
  ) {}

  @Post('create-session')
  async handle(@Body() body: CreateUserSessionBody) {
    const { email, password } = body;

    const token = await this.listUserByEmailAndCheckCredentialsUseCase.execute(
      email,
      password,
    );

    if (token.isLeft()) {
      const error = token.value;

      switch (error.constructor) {
        case UsersCredentialsInvalid:
          return new UnauthorizedException();
        default:
          return new BadRequestException(error.message);
      }
    }

    return {
      access_token: token.value.access_token,
    };
  }
}
