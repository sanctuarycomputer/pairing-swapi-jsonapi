const test    = require('ava');
const request = require('supertest');
const app     = require('../app');

test('it works', async t => {
  t.plan(1);

  const response = await request(app).get('/planets/1');
  t.is(response.status, 200);
});

