import { UserEntity } from '../entities/user-entity';

export abstract class CreateUserAbstractRepository {
  abstract create(patient: UserEntity): Promise<UserEntity>;
}
