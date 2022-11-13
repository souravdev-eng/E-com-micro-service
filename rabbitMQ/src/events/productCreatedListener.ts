import { Message, Channel } from 'amqplib';
import { Subjects } from '../types/subjects';
import { Listener } from './baseListener';
import { ProductCreatedEvent } from './productCreatedEvent';

export class ProductCreatedListener extends Listener<ProductCreatedEvent> {
  subject: Subjects.ProductCreated = Subjects.ProductCreated;

  onMessage(data: ProductCreatedEvent['data'], message: Message, channel: Channel) {
    channel.ack(message);
  }
}
