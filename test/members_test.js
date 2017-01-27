process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
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
      res.should.have.status(200);
      res.should.be.json;
      res.body.data.should.be.a('array');
      res.body.data.length.should.equal(10);
      done();
    });
  });
});
