import request from 'supertest';
import { expect } from 'chai';
const app = require('../routes.js');

describe('Groot endpoint with message', () => {
  it('should return an error message and 400 status', (done) => {
    request(app)
      .get('/groot')
      .expect(400)
      .end((err, res) => {
        expect(res.text).to.be.equal('{"error":"I am Groot!"}');
        done();
      });
  });
  it('should return a message and 200 status', (done) => {
    const message = 'test';
    const body = `{"received":"${message}","translated":"I am Groot!"}`;
    request(app)
      .get(`/groot?message=${message}`)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.be.equal(body);
        done();
      });
  });
});
