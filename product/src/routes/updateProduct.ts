import { NotFoundError, requireAuth, restrictTo } from '@ecom-micro/common';
import { Router, Response, Request, NextFunction } from 'express';
import { ProductUpdatedPublisher } from '../events/publishers/productUpdatedPublisher';
import { Product } from '../models/productModel';
import { natsWrapper } from '../natsWrapper';

const router = Router();

router.patch(
  '/api/product/:id',
  requireAuth,
  restrictTo('seller', 'admin'),
  async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return next(new NotFoundError('Oops! Product is not found'));
    }

    new ProductUpdatedPublisher(natsWrapper.client).publish({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      sellerId: product.sellerId,
    });

    res.status(200).send(product);
  }
);

export { router as productUpdateRouter };
