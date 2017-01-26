var express = require('express');
var app = express();

app.get('/members', function (req, res) {
  res.json({message: 'Hello World!'});
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
