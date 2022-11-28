import { getConnection } from 'typeorm';
import connection from './config';

beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  process.env.JWT_EXPIRE_IN = '90d';

  await connection.create();
});

beforeEach(async () => {
  await connection.clear();
});

afterAll(async () => {
  await connection.close();
});
