// make mock requests
const request = require('supertest');
const app = require('../server/index');
// / endpoint redirect
test('/email request & response test', async () => {
  // mock request for jobs
  const response = await request(app).post('/email').send({
    email: 'test@example.com',
    message: 'Hello, test!',
  });
  // successful request and email is sent
  expect(response.status).toBe(200);
});
