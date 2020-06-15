declare module '@burdzin/coded-error' {
  import { AppError } from '@/types/app';

  interface ICodedError {
    code?: number;
    details?: object;
    message?: string;
    meta?: object;
    props?: object;
    quiet?: boolean;
    stack?: string;
    status?: number;
  }

  interface ICodes {
    get(code: number): ICodedError;

    use(errors: Record<number, AppError>);
  }

  declare const codes: ICodes;

  class CodedError extends Error {
    constructor(code: number, error: ICodedError);
  }

  export = CodedError;
}
