//importing modules

var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');

var app=express();

const route = require('./route/routes');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/thenis');

//on connection
mongoose.connection.on('connected',()=>{
  console.log('MONGODDB connected at port 27017');
});

//on connection error

mongoose.connection.on('error',(err)=>{
  console.log(err);
});

const PORT = 3000;

//adding middleware - cors

app.use(cors());

//adding middleware - body-parser

app.use(bodyparser.json());

app.use('/api',route);

app.get('/',(req,res)=>{
  res.send('some changes');
})

app.listen(PORT, ()=>{
  console.log('Server has been started at port: '+PORT);
});
