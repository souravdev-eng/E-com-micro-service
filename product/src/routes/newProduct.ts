import { Router, Response, Request, NextFunction } from 'express';
import { Product } from '../models/productModel';

const router = Router();

router.post('/api/product/new', async (req: Request, res: Response, next: NextFunction) => {
  const product = Product.build({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    image: req.body.image,
    sellerId: req.body.sellerId,
    price: req.body.price,
  });

  await product.save();

  res.status(201).send(product);
});

export { router as newProductRouter };
