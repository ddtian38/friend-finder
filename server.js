// const htmlRouting = require("./routing/htmlRoutes.js")
const express = require("express");
const path = require("path");

module.exports = {
    express: express,
    path: path
}

const PORT = process.env.PORT || 3000;

var app = express();
//starting at the root
app.use(express.static('app/public'))
//client data sent from client is parsed
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Calling html and API routes
app.use("/", require('./app/routing/apiRoutes.js'))
app.use("/", require('./app/routing/htmlRoutes.js'))

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });