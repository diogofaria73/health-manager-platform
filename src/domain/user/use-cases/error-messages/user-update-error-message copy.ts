import { UseCaseError } from '@/core/errors/shared-global/use-cases-errors/use-case-error';

export class UserUpdateErrorMessage extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(
      `We have a problema to update user with e-mail "${identifier}". Please, try again later.`,
    );
  }
}
