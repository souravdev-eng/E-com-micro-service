import express from 'express';
import { receivedMessage } from './receivedMessage';
import { sendMessage } from './sendMessage';

const app = express();

app.use(express.json());

app.get('/', receivedMessage);
app.get('/send-message', sendMessage);

export { app };
