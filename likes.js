const mongoose =  require('mongoose');

const likesmodel = mongoose.Schema({
     post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
     },
     user:{
        type:String,
        required:true
     }
     
});

module.exports = mongoose.model("like",likesmodel);