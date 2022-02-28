// make mock requests
const request = require('supertest');
const app = require('../server/index');
// / endpoint redirect
test('/ redirect test', async () => {
  // mock request
  const response = await request(app).get('/');
  // check for 302 status code (successful redirect)
  expect(response.status).toBe(302);
});
