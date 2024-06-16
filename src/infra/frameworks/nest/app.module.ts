import { envSchema } from '@/core/configs/env';
import { HttpModule } from '@/infra/http/http.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
