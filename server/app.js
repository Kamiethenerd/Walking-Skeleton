var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var index = require('./routes/index');


var path = require("path");

app.use(bodyParser.json());

app.use("/", index);
app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log("Listening on port: ", port)
});


module.exports = app;
