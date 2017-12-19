var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var moment = require("moment");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/static/belt2/dist')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8001, function(){
    console.log("Port 8001 is the true port");
})