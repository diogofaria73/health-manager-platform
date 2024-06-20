import { envSchema } from '@/core/configs/env';
import { HttpModule } from '@/infra/http/http.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../security/auth/auth.module';
import { EnvService } from '@/infra/utils/env-helper/env.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ],
  controllers: [],
  providers: [EnvService],
})
export class AppModule {}
