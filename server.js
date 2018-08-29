const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

//configure bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//routes
const apiRoutes = require('./routing/apiRoutes')(app)
const htmlRoutes = require('./routing/htmlRoutes')(app)

//server static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(port, function(req, res) {
  console.log('server is running at ' + port)
});