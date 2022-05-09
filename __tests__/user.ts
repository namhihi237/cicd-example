const request = require('supertest');
import app from '../src/server';

describe('GET users', () => {
	it('should be get all users success', async () => {
		const response = await request(app).get('/user');

		expect(response.body.message).toBe('success');
	});
});
