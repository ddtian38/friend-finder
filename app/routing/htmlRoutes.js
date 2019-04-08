const express = require("../server.js").express;
const path = require("../server.js").path;

const router = express.Router()

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.get("/survey", function(req, res){
    res.sendFile(require("../server.js").path.join(__dirname, "../public/survey.html"))
})

router.get("*", function(req, res){
    res.sendFile(require("../server.js").path.join(__dirname, "../public/home.html"))
})



module.exports = router;