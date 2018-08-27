const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;

//create instance of express object
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const friends = require('./data/friends')

//server static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/api/friends', function(req, res) {
  res.json(friends);
});

app.post('/api/friends', function(req, res) {
  const surveyResults = req.body
  console.log(surveyResults + " sent to api!")
})

//start server
app.listen(port, function(req, res) {
  console.log('server is running at ' + port)
});

module.exports = app;