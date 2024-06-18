import { UseCaseError } from '@/core/errors/shared-global/use-cases-errors/use-case-error';

export class UsersCredentialsInvalid extends Error implements UseCaseError {
  constructor() {
    super(
      `We couldn't find a user with the given credentials. Please check your credentials and try again.`,
    );
  }
}
