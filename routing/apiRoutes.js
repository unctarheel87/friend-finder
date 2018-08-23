const friends = require('../data/friends');
const app = require('../server.js');

app.get('/api/friends', function(req, res) {
  res.send(friends);
});

