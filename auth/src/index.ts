import { DataSource } from 'typeorm';
import { User } from './entity/User';
import app from './app';

const start = () => {
  if (!process.env.POSTGRES_DB) {
    throw new Error('Postgres is DB supported');
  }

  if (!process.env.POSTGRES_USER) {
    throw new Error('Postgres is user is not found');
  }
  if (!process.env.POSTGRES_PASSWORD) {
    throw new Error('Postgres is password is not found');
  }

  if (!process.env.POSTGRES_HOST) {
    throw new Error('Postgres is host is not found');
  }

  if (!process.env.JWT_KEY) {
    throw new Error('JWT is not found');
  }

  try {
    const AppDataSource = new DataSource({
      type: 'postgres',
      port: 5432,
      url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_DB}@${process.env.POSTGRES_HOST}/${process.env.POSTGRES_DB}`,
      entities: [User],
      synchronize: true,
      ssl: false,
    });

    AppDataSource.initialize()
      .then(() => {
        console.log(`Auth Postgres Server Started...`);
      })
      .catch((err: any) => {
        console.error(err.message);
        process.exit();
      });
  } catch (error: any) {
    console.log(error);
  }
  app.listen(3000, () => console.log(`Auth service running on PORT 3000....`));
};

start();
