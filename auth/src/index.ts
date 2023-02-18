import { DataSource } from 'typeorm';
import { natsWrapper } from './natsWrapper';
import { User } from './entity/User';
import app from './app';

const start = async () => {
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

  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID must be defined');
  }

  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }

  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
  }

  if (!process.env.DB_URL) {
    throw new Error('DB_URL must be defined');
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    const AppDataSource = new DataSource({
      type: 'postgres',
      port: 5432,
      url: process.env.DB_URL,
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
