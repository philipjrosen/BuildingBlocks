var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/cities', function(req, res) {
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.json(cities);
});

module.exports = app;
