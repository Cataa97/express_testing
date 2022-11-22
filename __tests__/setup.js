import request from 'supertest';
import app from '../app.js'
before(async () => {
    const payload = {
        'user_nombre': 'test',
        'user_email': 'cata@test.com',
        'user_password': 'catacata'
    }
    await request(app).post('/auth/register').send(payload);
    
})  
