import type { Request, Response } from 'express';
import { codes, ICodedError } from '@burdzin/coded-error';
import { config } from '@/config';

interface IWithMoreDetails {
  details: {
    module: { errorModule: string };
  };
}

export const errorHandlerMiddleware = (err: ICodedError & IWithMoreDetails, req: Request, res: Response) => {
  // For some outstandingly strange reason express will not use this function for error handling
  // without this 4th param ('next'). Keep it.
  const defaultCode = 500;

  const {
    code = defaultCode,
    status = codes.get(defaultCode).status ?? defaultCode,
    message = codes.get(defaultCode).message,
    props = {},
    stack,
  } = err;

  console.log(err);

  const output: Partial<ICodedError> = { message, code };

  if (Object.keys(props).length) output.props = props;

  if (config.logger.showStack) output.stack = stack;

  res.status(status).json(output);
};
