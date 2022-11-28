import request from 'supertest';
import app from '../../app';

describe('Signup', () => {
  it('Should should return 201 if user Signup successfully', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        name: 'test',
        email: 'test@gmail.com',
        password: '123456',
        passwordConform: '123456',
      })
      .expect(201);
  });

  it('Should should return 400 if user provide invalid email address', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        name: 'test',
        email: 'testgmail.com',
        password: '123456',
        passwordConform: '123456',
      })
      .expect(400);
  });
});
