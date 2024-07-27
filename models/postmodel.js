const mongoose = require('mongoose');
// const { default: mongoose } = require('mongoose');

const post = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:20
        },
        body:{
            type:String,
            required:true
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"like"
            

        }],
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"comment",
            default:"no comments",
            required:false,
            
            
        }],
        createdate:{
            type:Date,
            required:true,
            default:Date.now(),

        }
    }
)
module.exports= mongoose.model("Post",post);
  