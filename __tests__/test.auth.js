import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import User from '../models/user.js';

const { expect } = chai;

describe('Test the auth endpoints', () => {

    it('should allow to create users', async () => {
        const payload = {
            'user_nombre': 'test',
            'user_email': 'cata@test.com',
            'user_password': 'catacata'
        }
        const { body, status } = await request(app).post('/auth/register').send(payload);
        expect(status).to.equal(201);

        expect(body).to.have.property('user_id');
        const user_id = body.user_id;
        const user = await User.findByPk(user_id);
        expect(user.user_name).to.equal(payload.user_name);
    });

    it('should return 400 if payload is incomplete', async () => {
        const payload = {
            'user_nombre': 'test',
            'user_password': 'catacata'
        }
        const { status } = await request(app).post('/auth/register').send(payload);
        expect(status).to.equal(400);
    });

    it('should return 400 if password is shorter than 6 characters', async () => {
        const payload = {
            'user_nombre': 'test',
            'user_email': 'cata@test.com',
            'user_password': 'catca'
        }
        const { body, status } = await request(app).post('/auth/register').send(payload);
        expect(status).to.equal(400);
        expect(body.message).contains('password must be at least 6 characters');
    });

    it('should return 400 if email does not have an @ character', async () => {
        const payload = {
            'user_nombre': 'test',
            'user_email': 'cata.test.com',
            'user_password': 'catacata'
        }
        const { body, status } = await request(app).post('/auth/register').send(payload);
        expect(status).to.equal(400);
        expect(body.message).contains('El correo debe contener @');
    });

    it('should allow to login', async () => {
        const payload = {
            'user_email': 'cata@test.com',
            'user_password': 'catacata'
        }
        const { body, status } = await request(app)
            .post('/auth/login')
            .type("json")
            .send(payload);
        expect(status).to.equal(200);
    });

    it("should fail if email is not incorrect", async () => {
        const payload = {
            'user_email': 'noexiste@test.com',
            'user_password': 'catacata'
        }
        const { body, status } = await request(app)
            .post('/auth/login')
            .type("json")
            .send(payload);
        expect(status).to.equal(404);
        expect(body.message).contains('No se ha encontrado un usuario con este Email');
    });

    it("should fail if password is not incorrect", async () => {
        const payload = {
            'user_email': 'cata@test.com',
            'user_password': 'ccatacata'
        }
        const { body, status } = await request(app)
            .post('/auth/login')
            .type("json")
            .send(payload);
        expect(status).to.equal(401);
        expect(body.message).contains('Invalid Password');
    });
});