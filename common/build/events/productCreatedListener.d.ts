import { Message, Channel } from 'amqplib';
import { Subjects } from '../types/subjects';
import { Listener } from './baseListener';
import { ProductCreatedEvent } from './productCreatedEvent';
export declare class ProductCreatedListener extends Listener<ProductCreatedEvent> {
    subject: Subjects.ProductCreated;
    onMessage(data: ProductCreatedEvent['data'], message: Message, channel: Channel): void;
}
