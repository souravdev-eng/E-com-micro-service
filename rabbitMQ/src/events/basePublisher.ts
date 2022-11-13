import { Connection } from 'amqplib';
import { Subjects } from '../types/subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject'];
  protected client: Connection;

  constructor(client: Connection) {
    this.client = client;
  }
  publish(data: T['data']) {
    this.client.createChannel().then((channel) => {
      channel.assertQueue(this.subject, { durable: true });
      channel.sendToQueue(this.subject, Buffer.from(JSON.stringify(data)));
      console.log(`Event Published`);
    });
  }
}
