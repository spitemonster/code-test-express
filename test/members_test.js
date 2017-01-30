process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var knex = require('../db/knex');
var server = require('../index');

chai.use(chaiHttp);

beforeEach(function(done) {
  knex.migrate.latest().then(function() {
    return knex.seed.run().then(function() {
      done();
    });
  });
});

describe('GET /members', function() {
  it('should return all members', function(done) {
    chai.request(server).get('/members').end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.data).to.be.a('array');
      expect(res.body.data.length).to.equal(10);
      expect(res.body.data[0]).to.have.property('subscription');
      done();
    });
  });
});
