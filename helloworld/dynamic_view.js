let express=require('express');
let router=express.Router();


router.get('/',function (req,res) {
    res.render('instagramAli',{user: {
            name: "Sultan",
            url: "https://www.instagram.com/akglali_/",
            age: "24"
        }
    });
});

module.exports = router;