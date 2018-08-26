const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;

const friends = require('./data/friends')

//create instance of express object
const app = express();

//server static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/api/friends', function(req, res) {
  res.json(friends);
});

//start server
app.listen(port, function(req, res) {
  console.log('server is running at ' + port)
});

module.exports = app;