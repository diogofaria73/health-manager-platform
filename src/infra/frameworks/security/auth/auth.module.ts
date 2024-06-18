import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Env } from '@/core/configs/env';
import { AuthenticateController } from '@/infra/http/controllers/authenticate/actions/authenticate-controller';
import { ListUserByEmailAndCheckCredentialsUseCase } from '@/domain/user/use-cases/list-user-by-email-and-check-credentials-use-case';
import { ListUserAbstractRepository } from '@/domain/user/contracts/list-user-abstract-repository';
import { ListUserConcreteRepository } from '@/infra/databases/repositories/user/list-users-concrete-repository';
import { PrismaService } from '@/infra/databases/prisma/service/prisma.service';

/**
 * AuthModule: Module for authentication, this module uses Passport and JWT and get the secret from the environment variables.
 */
@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory(configService: ConfigService<Env, true>) {
        const private_key = configService.get('PRIVATE_KEY', { infer: true });
        const public_key = configService.get('PUBLIC_KEY', { infer: true });

        return {
          signOptions: { algorithm: 'RS256' },
          privateKey: Buffer.from(private_key, 'base64'),
          publicKey: Buffer.from(public_key, 'base64'),
        };
      },
    }),
  ],
  controllers: [AuthenticateController],
  providers: [
    ListUserByEmailAndCheckCredentialsUseCase,
    {
      provide: ListUserAbstractRepository,
      useClass: ListUserConcreteRepository,
    },
    PrismaService,
  ],
})
export class AuthModule {}
