let  express=require('express');

let router=express.Router();

router.use('/', function (req,res,next) {
   console.log("Ali is started");
   next();
});
router.get('/', function (req,res,next) {
    res.send('Ali is working fine on the middle');
    next();
});


router.use('/' ,function (req,res) {
   console.log("Ali is end");
});

router.post('/', function (req,res) {
    res.send('Ali post is working fine');
});

module.exports = router;
