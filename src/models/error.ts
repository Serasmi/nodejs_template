import type { Server } from 'http';

export interface IResolve {
  server: Server;
}

export class AppError {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}
