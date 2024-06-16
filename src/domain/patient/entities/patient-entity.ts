import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

export interface PatientProps {
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
}

export class PatientEntity extends Entity<PatientProps> {
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

  static create(props: PatientProps, id?: UniqueEntityID): PatientEntity {
    const patient = new PatientEntity(props, id);

    return patient;
  }
}
