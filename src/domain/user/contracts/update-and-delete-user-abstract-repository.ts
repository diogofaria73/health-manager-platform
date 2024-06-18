import { UpdateUserEntity } from '../entities/update-user-entity';
import { UserEntity } from '../entities/user-entity';

export abstract class UpdateAndDeleteUserAbstractRepository {
  abstract update(patient: UpdateUserEntity): Promise<UserEntity>;
  abstract delete(id: string): Promise<UserEntity>;
}
