const express = require("../../server.js").express;
let friends = require("../data/friends.js")

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.get("/api/friends", function(req, res){
     
    res.json(friends)

})

router.post("/api/friends", function(req, res){
 
  // friends.push(req.body) 
  console.log(friends)
 
  //Base difference is a dumbing value. 
  var baseDiff = 100;
  var newDiff = 0;
  var matchInd;
  for (var i = 0; i < friends.length; i++){
    for(var j = 0; j < req.body.scores.length; j++){
      newDiff += Math.abs(req.body.scores[j] - friends[i].scores[j])
    }
    console.log(newDiff);

    if(newDiff < baseDiff){
      baseDiff = newDiff;
      matchInd = i;
     
    }
    newDiff = 0;
  }

  res.send(friends[matchInd])
  friends.push(req.body)
  console.log(friends)


})



module.exports = router;