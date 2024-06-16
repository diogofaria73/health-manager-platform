import { UseCaseError } from '@/core/errors/shared-global/use-cases-errors/use-case-error';

export class UserAlreadyExistsErrorMessage
  extends Error
  implements UseCaseError
{
  constructor(identifier: string) {
    super(`Patient with email "${identifier}" already exists.`);
  }
}
