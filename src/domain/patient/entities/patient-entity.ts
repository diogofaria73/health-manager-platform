import { AggregateRoot } from '@/core/entities/aggregate-root';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@prisma/client/runtime/library';

export interface PatientProps {
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class PatientEntity extends AggregateRoot<PatientProps> {
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

  get phone(): string {
    return this.props.phone;
  }
  set phone(value: string) {
    this.props.phone = value;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }
  set isActive(value: boolean) {
    this.props.isActive = value;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<PatientProps, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const patient = new PatientEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
      },
      id,
    );

    return patient;
  }
}
