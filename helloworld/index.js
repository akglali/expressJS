let   express=require('express');
let app = express();
let bodyParser = require('body-parser');
let multer=require('multer');
let upload=multer();
let cookieParser = require('cookie-parser');
const PORT = 3000;
//To parse json data
app.use(bodyParser.json());
app.use(cookieParser());

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));



app.set('view engine', 'pug');
app.set('views','../views');
app.use(express.static('public'));

let things= require('./things');
let ali= require('./ali');
let getId=require('./getid');
let firstTeamplate=require('./firstTemplate');
let instagramOfAli=require('./dynamic_view');
let content=require('./content');
let form=require('./form');


app.use('/thing',things);
app.use('/ali',ali);
app.use('/getID',getId);
app.use('/first_template',firstTeamplate);
app.use('/aliInsta',instagramOfAli);
app.use('/content',content);
app.use('/form',form);


app.listen(PORT,()=>console.log(`Express server currently running on port ${PORT}`));