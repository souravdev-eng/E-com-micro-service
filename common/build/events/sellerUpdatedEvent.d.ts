import { Subjects } from '../types/subjects';
export interface SellerUpdatedEvent {
    subject: Subjects.SellerUpdated;
    data: {
        id: string;
        email: number;
        role: string;
    };
}
