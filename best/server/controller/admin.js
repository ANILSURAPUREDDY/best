var model = require('../model/admin');
var router = {};

router.createUser = function(req,res){
    var ip = req.body.params;
    if( !ip.title && !ip.firstName && !ip.lastName && !ip.email ){
        res.status(200).send("All conditions are not met")
    }   
    model.createUser(ip,function(err,resp){
        if(err){
            res.status(200).send('u r facinf some issues');
        } else {
            res.status(200).send({status:"SUCCESS",result:resp})
        }
    })  
}

module.exports = router;