var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render("Welcome to the port 3000! This is the default route.");
    // console.log("server is running!")
});
module.exports = router;