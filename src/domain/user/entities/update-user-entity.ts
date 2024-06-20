export interface UpdateUserEntity {
  id: string;
  name: string;
  email: string;
  password?: string;
  isActive: boolean;
  roles: string[];
}
