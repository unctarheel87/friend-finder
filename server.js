const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

//create instance of express object
const app = express();

//server static files
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(req, res) {
  console.log('you are connected to Local Server...')
});

module.exports = app;