var Sequence = require('sequence').Sequence;
var database = require("./database");
var ObjectID = require('mongodb').ObjectID;
var encript = require('crypto');

var encriptPass = (pass) => {
    var pass = encript.createHmac('sha512',pass).update(pass).digest('hex');
    return pass;
}

exports.createUser = function(ip,cb){
    var db;
    var sequence = Sequence.create();
    sequence.then(function(next){
        database.getdb(function(err,dbref){
            if(err){
                process.exit(1);
            } else {
                db = dbref;
                next();
            }
        })
    }).then(function(next){
        console.log("model is connected");
        if(ip.password){
            ip.password = encriptPass(ip.password)
        }
        ip.create_date = new Date();
        db.newCollection.save(ip,function(err,res){
            console.log("err",err,"resp",res)
            if(err){
                cb(null,err);
            } else {
                cb(null,res)
            }
        })
    })
}