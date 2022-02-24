var express = require('express');
var app = express();
var album = require("./album");
var image = require("./image");
var comment = require('./comment');
var reply = require('./reply');

app.use("/album", album);
app.use("/image", image);
app.use("/comment", comment);
app.use("/reply", reply);

module.exports = app;