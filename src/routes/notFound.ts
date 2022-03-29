import type { IControllerResult } from '@/controllers/types';

const notFound = async (): Promise<IControllerResult> => ({
  headers: {
    'Content-Type': 'application/json',
  },
  body: { error: 'Not found.' },
  statusCode: 404,
});

export default notFound;
