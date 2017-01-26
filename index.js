var express = require('express');
var app = express();
var knex = require('./db/knex');

app.get('/members', function (req, res) {
  knex.select().from('members').then(function(rows) {
    res.json(rows);
  })
  .catch(function(error) {
    console.error(error)
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

module.exports = app;
