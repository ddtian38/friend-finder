// const express = require("express");
// const path = require("path")
const server = require("../server.js")
console.log(server);
const express = server.express;
const path = server.path;
const PORT = 8805;


const app = express();

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})


app.listen(PORT, function(){
    console.log("listening on PORT " + PORT)
})