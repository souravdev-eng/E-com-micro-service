import { Subjects, ProductCreatedEvent, Listener } from '@ecom-micro/common';
import { Message, Channel } from 'amqplib';

export class ProductCreatedListener extends Listener<ProductCreatedEvent> {
  subject: Subjects.ProductCreated = Subjects.ProductCreated;
  async onMessage(data: ProductCreatedEvent['data'], msg: Message, channel: Channel) {
    console.log(data);
    // channel.ack(msg)
  }
}
