const express = require("./server.js").express;
const path = require("../server.js").path;
let friends = require("../data/friends.js")

const router = express.Router();
let input;

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

console.log(friends)


router.get("/api/friends", function(req, res){
    if(input){

        for(var i = 0; i < friends.length; i++){

        }
     
    }

})

router.post("/api/friends", function(req, res){
 
   input = req.body
})



module.exports = router;