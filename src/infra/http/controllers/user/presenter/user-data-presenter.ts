import { UserEntity } from '@/domain/user/entities/user-entity';

export class UserPresenter {
  static toHttp(user: UserEntity) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isActive: user.isActive,
      roles: user.roles,
    };
  }
}
