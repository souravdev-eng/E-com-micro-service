import { Request, Response, NextFunction } from 'express';
import { connection } from './index';
import { ProductCreatedListener } from './events/productCreatedListener';

export const receivedMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('RECEIVED MESSAGE');
    new ProductCreatedListener(connection).listen();
  } catch (error) {
    console.log(error);
  }
};
