import request from 'supertest';
import app from '../../app';
import { natsWrapper } from '../../natsWrapper';

describe('Show Product List', () => {
  it('should return 403 if user is not logged in first', async () => {
    await request(app).get('/api/product').expect(403);
  });
});
