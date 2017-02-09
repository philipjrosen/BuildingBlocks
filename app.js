var express = require('express');
var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(express.static(__dirname + '/public'));

var cities = {
  'Lotopia': 'description',
  'Caspiana': 'description',
  'Indigo': 'description'
};

app.get('/cities', function(req, res) {
  res.json(Object.keys(cities));
});

app.post('/cities', urlencode, function(req, res) {
  var newCity = req.body;
  cities[newCity.name] = newCity.description;
  res.status(201).json(newCity.name);
});

module.exports = app;
