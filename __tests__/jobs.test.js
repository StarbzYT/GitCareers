// make mock requests
const request = require('supertest');
const app = require('../server/index');
// / endpoint redirect
test('/jobs request & response test', async () => {
  // mock request for jobs
  const response = await request(app).post('/jobs').send({
    language: 'python',
    country: 'Canada',
    internships: false,
  });
  // successful request
  expect(response.status).toBe(200);
  // response has json
  response.forEach((job) => {
    // each object should have a job title
    expect(job.hasOwnProperty('title')).toBe(true);
    // job has company
    expect(job.hasOwnProperty('company')).toBe(true);
    // created date
    expect(job.hasOwnProperty('created')).toBe(true);
    // location
    expect(job.hasOwnProperty('location')).toBe(true);
    // salary_max
    expect(job.hasOwnProperty('salary_max')).toBe(true);
    // redirect_url
    expect(job.hasOwnProperty('redirect_url')).toBe(true);
  });
});
