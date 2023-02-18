import request from 'supertest';
import app from '../../app';
import { natsWrapper } from '../../natsWrapper';

let sellerToken: any;
let sellerPayload: any;
let product: any;

beforeEach(async () => {
  const { token, payload } = global.sellerSignIn();

  sellerToken = token;
  sellerPayload = payload;

  const response = await request(app)
    .post('/api/product/new')
    .set('Cookie', sellerToken)
    .send({
      title: 'How to Win Friends & Influence People',
      description:
        'For more than sixty years the rock advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives. Now this previously revised and updated bestsellerId is available in trade paperback for the first time to help you achieve your maximum potential throughout the next century!',
      price: 150,
      image: 'http://test.png',
      category: 'book',
      sellerId: sellerPayload.id,
    })
    .expect(201);

  product = response.body;
});

describe('PRODUCT UPDATED', () => {
  test('should return 200 if product update successfully', async () => {
    const response = await request(app)
      .patch(`/api/product/${product.id}`)
      .set('Cookie', sellerToken)
      .send({ price: 999 })
      .expect(200);

    expect(response.body.price).toEqual(999);
    expect(natsWrapper.client.publish).toHaveBeenCalled();
  });

  test('should return 403 normal user try to update product', async () => {
    await request(app)
      .patch(`/api/product/${product.id}`)
      .set('Cookie', global.signIn())
      .send({ price: 999 })
      .expect(403);
  });

  test('should return 404 if product is not found in DB', async () => {
    await request(app)
      .patch(`/api/product/639b213db5e8f3a21129d411`)
      .set('Cookie', sellerToken)
      .send({ price: 999 })
      .expect(404);
  });
});
