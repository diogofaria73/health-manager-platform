import { Env } from '@/core/configs/env';
import { ConfigService } from '@nestjs/config';

export class EnvService {
  constructor(private configService: ConfigService<Env, true>) {}

  get<T extends keyof Env>(key: T) {
    return this.configService.get<T>(key, { infer: true });
  }
}
