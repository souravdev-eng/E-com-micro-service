import { connect, Connection } from 'amqplib';
import { app } from './app';

let amqpUrl = 'amqp://localhost:5672';
let connection: Connection;

const start = async () => {
  try {
    connection = await connect(amqpUrl);
    console.log('MQ connected...');
  } catch (error) {
    console.log(error);
  }
  app.listen(4000, () => {
    console.log('MQ Server listening on port 4000');
  });
};

start();

export { connection };
