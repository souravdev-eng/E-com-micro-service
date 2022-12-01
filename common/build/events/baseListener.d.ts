import { Message, Connection, Channel } from 'amqplib';
import { Subjects } from '../types/subjects';
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract onMessage(data: T['data'], msg: Message, channel: Channel): void;
    private client;
    constructor(client: Connection);
    listen(): Promise<void>;
    parseMessage(msg: Message): any;
}
export {};
