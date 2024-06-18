import { UseCaseError } from '@/core/errors/shared-global/use-cases-errors/use-case-error';

export class UsersNotFound extends Error implements UseCaseError {
  constructor() {
    super(
      `We can't find any patient registered in database. Please, try again later.`,
    );
  }
}
