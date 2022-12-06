import { NotFoundError } from '@ecom-micro/common';
import { Router, Response, Request, NextFunction } from 'express';
import { Product } from '../models/productModel';

const router = Router();

router.patch('/api/product/:id', async (req: Request, res: Response, next: NextFunction) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new NotFoundError('Opps! Product is not found'));
  }

  res.status(200).send(product);
});

export { router as productUpdateRouter };
