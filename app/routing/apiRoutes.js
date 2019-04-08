const friends = require("../data/friends.js")
const express = require("./server.js").express;

const PORT = 8805;
const app = express();
let input;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/api/friends", function(req, res){
    if(input){

        for(var i = 0; i < friends.length; i++){

        }
     
    }

})

app.post("/api/friends", function(req, res){
 
   input = req.body
})

app.listen(PORT, function(){
    console.log('listening on route ' + PORT)
})

module.exports = {
    input: input
}