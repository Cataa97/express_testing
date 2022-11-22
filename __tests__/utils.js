import request from 'supertest';
import app from '../app.js';

async function getToken() {
  const payload = {
    'user_nombre': 'test',
    'user_email': 'cata@test.com',
    'user_password': 'catacata'
  }
  const { body } = await request(app).post('/auth/login').send(payload);
  return body.accessToken;
}

export default getToken;