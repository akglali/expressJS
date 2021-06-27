let  express=require('express');
let router=express.Router();
let bodyParser = require('body-parser');
let multer = require('multer');
let upload=multer();

router.get('/',function (req,res) {
    res.render('form');
});

//To parse json data
router.use(bodyParser.json());

//To parse URL encoded data
router.use(bodyParser.urlencoded({ extended: true }));

router.use(upload.array());
router.use(express.static('public'));

router.post('/',function (req,res) {
    console.log(req.body);
    res.send('Request is recived');
});


module.exports = router;