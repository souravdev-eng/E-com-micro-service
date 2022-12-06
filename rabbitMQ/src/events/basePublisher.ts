import { Channel, Connection } from 'amqplib';
import { Subjects } from '../types/subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject'];
  protected client: Connection;
  protected channel: Channel;

  constructor(client: Connection) {
    this.client = client;
  }

  async createChanel() {
    this.channel = await this.client.createChannel();
  }

  async publish(subject: T['subject'], data: T['data']) {
    if (!this.channel) {
      await this.createChanel();
    }
    await this.channel.assertExchange(this.subject, 'direct');
    await this.channel.publish(
      this.subject,
      subject,
      Buffer.from(
        JSON.stringify({
          logType: subject,
          message: data,
          dateTime: new Date(),
        })
      )
    );
    console.log(`Event published to subject: ${this.subject}`);
    //   this.client
    //     .createChannel()
    //     .then((channel) => {
    //       channel.assertQueue(this.subject, { durable: true });
    //       channel.sendToQueue(this.subject, Buffer.from(JSON.stringify(data)));
    //       console.log(`Event published to subject: ${this.subject}`);
    //       resolve();
    //     })
    //     .catch((error) => reject(error));
    // });
  }
}

// class Producer {
//   channel: Channel;

//   async createChannel() {
//     const connection = await amqp.connect(config.rabbitMQ.url);
//     this.channel = await connection.createChannel();
//   }

//   async publishMessage(routingKey: any, message: any) {
//     if (!this.channel) {
//       await this.createChannel();
//     }

//     const exchangeName = config.rabbitMQ.exchangeName;
//     await this.channel.assertExchange(exchangeName, 'direct');

//     const logDetails = {
//       logType: routingKey,
//       message: message,
//       dateTime: new Date(),
//     };
//     await this.channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(logDetails)));

//     console.log(`The new ${routingKey} log is sent to exchange ${exchangeName}`);
//   }
// }
