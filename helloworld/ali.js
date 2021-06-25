let  express=require('express');

let router=express.Router();


router.get('/', function (req,res) {
    res.send('Ali is working fine');
});
router.post('/', function (req,res) {
    res.send('Ali post is working fine');
});

module.exports = router;
