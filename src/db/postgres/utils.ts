import { QueryFile } from 'pg-promise';
import path from 'path';

// Helper for linking to external query files:
export const sql = (dirname: string, file: string) => {
  const fullPath = path.join(dirname, file); // generating full path;
  return new QueryFile(fullPath, { minify: true });
};
