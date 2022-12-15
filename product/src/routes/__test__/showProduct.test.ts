import request from 'supertest';
import app from '../../app';
import { natsWrapper } from '../../natsWrapper';

describe('Show Product List', () => {
  it('should return 403 if user is not logged in first', async () => {
    await request(app).get('/api/product').expect(403);
  });

  it('Only seller can add product other wise it should give 403', async () => {
    await request(app)
      .post('/api/product/new')
      .set('Cookie', global.signIn())
      .send({
        title: 'How to Win Friends & Influence People',
        description:
          'For more than sixty years the rock advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives. Now this previously revised and updated bestsellerId is available in trade paperback for the first time to help you achieve your maximum potential throughout the next century!',
        price: 150,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL._AA300_.jpg',
        category: 'book',
        sellerId: '44925a0d-ead9-45a6-bd9b-7d636b119be5',
      })
      .expect(403);
  });

  it('should return 201 if seller create a product with required properties', async () => {
    const { token, payload } = global.sellerSignIn();

    await request(app)
      .post('/api/product/new')
      .set('Cookie', token)
      .send({
        title: 'How to Win Friends & Influence People',
        description:
          'For more than sixty years the rock advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives. Now this previously revised and updated bestsellerId is available in trade paperback for the first time to help you achieve your maximum potential throughout the next century!',
        price: 150,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL._AA300_.jpg',
        category: 'book',
        sellerId: payload.id,
      })
      .expect(201);

    // expect(natsWrapper.client.publish).toHaveBeenCalled();

    // console.log(response.body);
  });
});
