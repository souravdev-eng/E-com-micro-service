import { Connection } from 'amqplib';
import { Subjects } from '../types/subjects';
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: Connection;
    constructor(client: Connection);
    publish(data: T['data']): Promise<void>;
}
export {};
