let   express=require('express');
let app = express();
const PORT = 3000;

let things= require('./things');
let ali= require('./ali');
let getId=require('./getid');
app.use('/thing',things);
app.use('/ali',ali);
app.use('/getID',getId);

app.listen(PORT,()=>console.log(`Express server currently running on port ${PORT}`));