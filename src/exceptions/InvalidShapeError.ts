import { ERROR_INVALID_FORMAT } from '../utils/errorMessages';

export class InvalidShapeError extends Error {
  constructor(message: string = ERROR_INVALID_FORMAT) {
    super(message);
    this.name = 'InvalidShapeError';
  }
}
