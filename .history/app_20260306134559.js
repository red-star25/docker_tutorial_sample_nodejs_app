var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello Docker learners!!!");
});

app.listen(8080);
module.exports.getApp = app;
