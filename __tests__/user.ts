const request = require('supertest');
const app = require('../src/server');

describe('GET users', () => {
	it('should be get all users success', async () => {
		const response = await request(app).get('/user');

		expect(response.body.message).toBe('success');
	});
});
