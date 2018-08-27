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
  console.log(JSON.stringify(surveyResults) + " sent to api!")
  res.json(findBestMatch(friends, surveyResults))
})

//start server
app.listen(port, function(req, res) {
  console.log('server is running at ' + port)
});

function compareScores(user1, user2) {
  let totalDifference = 0
  for(let i = 0; i < user1.length; i++) {
    totalDifference += Math.abs(user1[i] - user2[i]) 
  }
  return totalDifference
}

function findBestMatch(user1, user2) {
  const matchArr = []
  for(let i = 0; i < user1.length; i++) {
    let totalDifference = compareScores(user1[i].scores, user2.scores)
    matchArr.push(totalDifference)
  }
  let lowestDiffIndex = matchArr.indexOf(Math.min(...matchArr))
  return friends[lowestDiffIndex]
}

module.exports = app;