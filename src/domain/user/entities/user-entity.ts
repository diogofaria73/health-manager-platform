import { AggregateRoot } from '@/core/entities/aggregate-root';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@prisma/client/runtime/library';

export interface UserProps {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  roles: string[];
  createdAt: Date;
  updatedAt?: Date | null;
}

/**
 * The UserEntity class is an aggregate root that
 * represents a user entity. It extends the AggregateRoot
 * class and has a UserProps interface that defines the properties of a user entity.
 */

export class UserEntity extends AggregateRoot<UserProps> {
  get name(): string {
    return this.props.name;
  }
  set name(value: string) {
    this.props.name = value;
  }

  get email(): string {
    return this.props.email;
  }
  set email(value: string) {
    this.props.email = value;
  }

  get password(): string {
    return this.props.password;
  }
  set password(value: string) {
    this.props.password = value;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }
  set isActive(value: boolean) {
    this.props.isActive = value;
  }

  get roles(): string[] {
    return this.props.roles;
  }
  set roles(value: string[]) {
    this.props.roles = value;
  }

  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<UserProps, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const user = new UserEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
      },
      id,
    );

    return user;
  }
}
