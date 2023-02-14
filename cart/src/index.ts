import { DataSource } from 'typeorm';
import app from './app';
import { Cart } from './entity/Cart';
import { natsWrapper } from './natsWrapper';

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

  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID must be defined');
  }
  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }
  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
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

    const AppDataSource = new DataSource({
      type: 'postgres',
      port: 5432,
      // url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_DB}@${process.env.POSTGRES_HOST}/${process.env.POSTGRES_DB}`,
      url: `postgres://lpookmms:LGR429_tudJqbTLLgv7k4V-7fFStzj18@john.db.elephantsql.com/lpookmms`,
      entities: [Cart],
      synchronize: true,
      ssl: false,
    });

    AppDataSource.initialize()
      .then(() => {
        console.log(`Cart Postgres Server Started...`);
      })
      .catch((err: any) => {
        console.error(err);
        process.exit();
      });
  } catch (error: any) {
    console.log(error);
  }
  app.listen(3000, () => console.log(`Cart service running on PORT 3000....`));
};

start();
