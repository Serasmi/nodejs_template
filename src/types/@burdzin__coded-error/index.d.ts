declare module '@burdzin/coded-error' {
  import { AppError } from '@/models/error';

  export interface ICodedError {
    code?: number;
    details?: object;
    message?: string;
    meta?: object;
    props?: object;
    quiet?: boolean;
    stack?: string;
    status?: number;
  }

  export interface ICodes {
    get(code: number): ICodedError;

    use(errors: Record<number, AppError>);
  }

  export const codes: ICodes;

  class CodedError extends Error {
    constructor(code: number, error: ICodedError);
  }

  export = CodedError;
}
