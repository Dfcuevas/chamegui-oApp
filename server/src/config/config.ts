import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ?? 3001;
export const DB_URI = process.env.DB_URI ?? '';
export const DB_URI_TEST = process.env.DB_URI_TEST ?? '';
export const NODE_ENV = process.env.NODE_ENV ?? '';
export const SECRET = process.env.SECRET ?? '';