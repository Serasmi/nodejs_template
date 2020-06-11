import { NextFunction, Request, Response } from 'express';
import { MiddlewareFunction } from '@/types/middleware';

export const asyncMiddleware = (fn: MiddlewareFunction) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);
