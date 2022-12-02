import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { NotFoundError, errorHandler } from '@ecom-micro/common';
import cors from 'cors';

const app = express();

// middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(cors());

// routes

app.use('*', (req: Request, res: Response, next: NextFunction) => {
  return next(new NotFoundError(`${req.originalUrl} is not find to this server!`));
});

// global error handlebar
app.use(errorHandler);

export default app;
