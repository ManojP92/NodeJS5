var express = require('express');
var router = express.Router();
// let arr= [{'id':1, 'name':'manoj'},
//           {'id':2, 'name':'vikram'},
//           {'id':3, 'name':'john'},
//           {'id':4, 'name':'pug'}];

router.get('/', function(req, res, next){
    res.send('Welcome to the port 3000! This is the /users route.');
    // res.send(arr);
});
router.post('/',function(req,res,next){
    // const users= {
    //     id: arr.length + 1,
    //     name: req.body.name
    // }
    // arr.push(users);
    // res.send(users)
    res.send('post works')
});
router.put('/', function(res,req,next){
    res.send('put works')
});
module.exports= router;