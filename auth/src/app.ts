import 'express-async-errors';
import cookieSession from 'cookie-session';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { errorHandler } from './middleware/errorHandler';
import { loginUser } from './controllers/loginUser';
import { newUser } from './controllers/newUser';
import { currentUserRoute } from './controllers/currentUser';

const app = express();

// middleware
app.set('trust proxy', true); //? because we transfer our request via ingress proxy
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

// routes
app.use(newUser);
app.use(loginUser);
app.use(currentUserRoute);

// global error handlebar
app.use(errorHandler);

export default app;
