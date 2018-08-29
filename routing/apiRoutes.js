const friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function(req, res) {
    const surveyResults = req.body
    console.log(JSON.stringify(surveyResults) + " sent to api!")
    res.json(findBestMatch(friends, surveyResults))
  })
}

//api logic
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