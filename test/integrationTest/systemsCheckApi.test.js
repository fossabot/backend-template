import { expect } from 'chai';
import { describe, before, it } from 'mocha';
import request from 'supertest';
import app from '../../src/app';

describe('System check API', () => {
  describe('GET /ping', () => {
    let response;

    before(async () => {
      response = await request(app)
        .get('/ping')
        .set('Accept', 'application/json');
    });

    it('should response with 200', async () => {
      expect(response.statusCode).to.equal(200);
    });

    it('should response with pong', async () => {
      expect(response.body.message).to.equal('pong');
    });
  });

  describe('Health check API', () => {
    describe('GET /health', () => {
      describe('everything normal', () => {
        // TODO: implement test health check
        it('should response with 200', () => {});

        it('should response with 200', () => {});
      });
    });
  });
});
