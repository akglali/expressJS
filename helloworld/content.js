let  express=require('express');

let router=express.Router();


router.get('/',function (req,res) {
   res.render('CONTENT');
});

module.exports = router;