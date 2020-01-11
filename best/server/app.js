var express = require('express');
var app = express();
var port = 3333;
var admin = require('./controller/admin');
var model = require('./model/admin');
var path = require('path');
// var multer = require('multer');
var bodyParser = require('body-parser');
var config = require('./config.json')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({}));

app.use('', express.static(path.join(__dirname, '../public')))

app.get('/index',(req,res)=>{
	res.status(404).send("get is not working");
	
})  

app.post('/web',(req,res)=>{
    if(!req.body.cmd){
        res.status(404).send('');
        return;
    }
    var cmd = req.body.cmd;
    if(admin[cmd]){
        admin[cmd](req,res) 
    } else {
        res.status(404).send('')
    }
})

app.listen(port,()=>{
    console.log("server"+port);
})
