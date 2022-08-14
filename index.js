let express = require('express');
let app = express();
app.use(express.json());  

let arr= [{"id":1, "name":"manoj"},
          {"id":2, "name":"vikram"},
          {"id":3, "name":"john"},
          {"id":4, "name":"pug"}]

let usersRoute = require('./routes/users');
let gamesRoute = require('./routes/games');
let Put= require('./putm');
const router = require('./routes/users');
// let defaultRoute = require('./routes/default');

app.get('/', function(req,res,next){
    res.send(arr);

   // res.send('server is up and running fine on port:3000');
})
app.post('/',(res,req,next)=>{
    const users= {
        id: arr.length + 1,
        name: req.body.name
    }
    arr.push(users);
    res.send( users);
    
})
// router.put('/:id', Put.userPut)
app.put('/:id',(res,req,next)=>{
    const user= arr.find(c=>c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("Invalid ID!");
    user.name=req.body.name;
    res.send( user);
    next()
})
app.delete('/:id',(res,req,next)=>{
    const user= arr.find(c=>c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("Invalid ID!");
    const i=arr.indexOf(user);
    arr.splice(i,1);
    res.send('record deleted');
    next()
})

// app.use('/', defaultRoute);
app.use('/users', usersRoute);
app.use('/games', gamesRoute);

app.listen(3000, function(){
    console.log('server is up on port:3000')
})