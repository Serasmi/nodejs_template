import { NextFunction, Request, Response } from 'express';
import { IField } from '@/types/routes';

export const checkParamsMiddleware = (params: Array<IField>) => (req: Request, res: Response, next: NextFunction) => {
  const body = { ...req.query, ...req.body };
  const requiredFields = params.filter(field => field.isRequired);

  requiredFields.forEach(field => {
    if (body[field.name] == null) throw new Error(`Missing parameter '${field.name}'`);
  });

  next();
};
