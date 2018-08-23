const app = require('../server');

app.get('/', function(req, res) {
  res.sendFile('home.html');
});