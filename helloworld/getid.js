let express = require('express');
let router=express.Router();

router.get('/:id([0-9]{5})/:name', function(req, res){
    res.send('The id of user is ' + req.params.id+" and the name of user  is "+req.params.name.toUpperCase());
});
router.get('*',function (req,res) {
    res.send("You ducker this is invalid.")
});
module.exports = router;