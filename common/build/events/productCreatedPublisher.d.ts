import { Subjects } from '../types/subjects';
import { Publisher } from './basePublisher';
import { ProductCreatedEvent } from './productCreatedEvent';
export declare class ProductCreatedPublisher extends Publisher<ProductCreatedEvent> {
    subject: Subjects.ProductCreated;
}
