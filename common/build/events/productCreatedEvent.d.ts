import { Subjects } from '../types/subjects';
export interface ProductCreatedEvent {
    subject: Subjects.ProductCreated;
    data: {
        id: string;
        title: string;
        price: number;
        productUrl: string;
        sellerId: string;
    };
}
