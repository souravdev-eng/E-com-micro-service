import { Request, Response, NextFunction } from 'express';
import { ProductCreatedPublisher } from './events/productCreatedPublisher';
import { connection } from './index';

export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('SEND MESSAGE');
    const publisher = new ProductCreatedPublisher(connection);
    publisher.publish({
      id: '223',
      title: 'Test Product',
      price: 235,
      productUrl: 'http://image.png',
      sellerId: '364',
    });
  } catch (error) {
    console.log(error);
  }
};
