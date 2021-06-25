let   express=require('express');

let router=express.Router();


router.get('/', function (req,res) {
    res.send('Get router is working fine');
});
router.post('/', function (req,res) {
    res.send('Get router post is working fine');
});

module.exports = router;
