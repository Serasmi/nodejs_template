import { AppError } from '@/models/error';
import type { TErrorsConfig } from '@/config/types';

export const errors: TErrorsConfig = {
  0: new AppError(500, 'Unknown error'),
  401: new AppError(401, 'Unauthorized'),
  403: new AppError(403, 'Forbidden'),
  404: new AppError(404, 'Not Found'),
  500: new AppError(500, 'Internal Server Error'),
};
