import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { newUser } from './controllers/newUser';
import { errorHandler } from './middleware/errorHandler';
import { loginUser } from './controllers/loginUser';

const app = express();

// middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use(newUser);
app.use(loginUser);

// global error handlebar
app.use(errorHandler);

export default app;
