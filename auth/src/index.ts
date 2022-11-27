import { DataSource } from 'typeorm';
import { User } from './entity/User';
import app from './app';

const start = () => {
  try {
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

    const AppDataSource = new DataSource({
      type: 'postgres',
      port: 5432,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      entities: [User],
      synchronize: true,
    });

    AppDataSource.initialize()
      .then(() => {
        console.log(`Auth Postgres Server Started...`);
      })
      .catch((err) => {
        console.error(err);
        process.exit();
      });
  } catch (error: any) {
    console.log(error);
  }
  app.listen(3000, () => console.log(`Auth service running on PORT 3000....`));
};

start();
