// const htmlRouting = require("./routing/htmlRoutes.js")
const express = require("express");
const path = require("path");

module.exports = {
    express: express,
    path: path
}

const PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require('./routing/apiRoutes.js'))
app.use("/", require('./routing/htmlRoutes.js'))

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });