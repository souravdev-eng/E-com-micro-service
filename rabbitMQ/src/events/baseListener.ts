import amqp, { Message, Connection, Channel, ConsumeMessage } from 'amqplib';
import { Subjects } from '../types/subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  //! Queue GroupName
  abstract subject: T['subject'];
  abstract onMessage(data: T['data'], msg: Message, channel: Channel): void;
  private client: Connection;

  constructor(client: Connection) {
    this.client = client;
  }
  async listen() {
    this.client.createChannel().then((channel) => {
      channel.assertQueue(this.subject);
      channel.consume(this.subject, (message: Message | null) => {
        if (message !== null) {
          console.log(`Message Received to: ${this.subject}`);
          const parseMsg = this.parseMessage(message);
          this.onMessage(parseMsg, message, channel);
        }
      });
    });
  }

  parseMessage(msg: Message) {
    const data = msg.content;
    return typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf8'));
  }

  async consumeMessages() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    await channel.assertExchange(this.subject, 'direct');

    const q = await channel.assertQueue('InfoQueue');

    await channel.bindQueue(q.queue, this.subject, 'Info');

    channel.consume(q.queue, (msg: ConsumeMessage | null) => {
      if (msg !== null) {
        const data = msg.content;
        typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf8'));
        console.log(data);
        channel.ack(msg);
        return;
      }
    });
  }
}
