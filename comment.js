const mongoose =  require('mongoose');

const commentsmodel = mongoose.Schema({
     post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
     },
     user:{
        type:String,
        required:true
     },
     body:{
        type:String,
        required:true
     }
});

module.exports = mongoose.model("comment",commentsmodel);