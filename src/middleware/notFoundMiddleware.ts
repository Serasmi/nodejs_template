import CodedError from '@burdzin/coded-error';
import { NextFunction, Request, Response } from 'express';

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const err = new CodedError(404, { quiet: true, details: { module: module.filename } });
  next(err);
};
