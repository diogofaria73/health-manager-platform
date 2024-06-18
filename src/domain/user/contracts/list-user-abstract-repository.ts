import { UserEntity } from '../entities/user-entity';

export abstract class ListUserAbstractRepository {
  abstract listAll(): Promise<UserEntity[]>;
  abstract listById(id: string): Promise<UserEntity | null>;
  abstract listByEmail(email: string): Promise<UserEntity | null>;
}
