const app = require('../server.js');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/home.html');
});