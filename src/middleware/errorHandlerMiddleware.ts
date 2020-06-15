import { NextFunction, Request, Response } from 'express';
import { codes, ICodedError } from '@burdzin/coded-error';
import config from 'config';

const showStack = config.get('logger.showStack');

interface IWithMoreDetails {
  details: {
    module: { errorModule: string };
  };
}

export const errorHandlerMiddleware = (
  err: ICodedError & IWithMoreDetails,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // For some outstandingly strange reason express will not use this function for error handling
  // without this 4th param ('next'). Keep it.
  const defaultCode = 500;

  let {
    code = defaultCode,
    status = codes.get(defaultCode).status,
    message = codes.get(defaultCode).message,
    props = {},
    quiet,
    details: { module: errorModule = '' } = {},
    stack,
    ...restMeta
  } = err;

  console.log(err);

  const output: Partial<ICodedError> = { message, code };

  if (Object.keys(props).length) output.props = props;

  if (showStack) output.stack = stack;

  res.status(status!).json(output);
};
