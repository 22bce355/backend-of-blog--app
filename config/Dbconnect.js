const mongoose= require('mongoose');
require('dotenv').config();
const dbconnecting = ()=>{
mongoose.connect(process.env.DATA_BASE,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(console.log("db connected!"))
.catch((error)=>{console.log("error in db connect!");
process.exit(1);})}
module.exports = dbconnecting;

