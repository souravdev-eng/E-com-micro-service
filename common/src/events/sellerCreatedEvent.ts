import { Subjects } from '../types/subjects';

export interface SellerCreatedEvent {
  subject: Subjects.SellerCreated;
  data: {
    id: string;
    email: number;
    role: string;
  };
}
