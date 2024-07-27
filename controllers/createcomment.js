const { default: mongoose }=require('mongoose');
const comment = require('../models/comment');

const Post = require('../models/postmodel');

const createcomment = async(req,res)=>{
try{
const {post,user,body} = req.body;
const nc = new comment({post,user,body});
const savedcomment = await nc.save();
const updatepost = await Post.findByIdAndUpdate(post,{$push:{comments: savedcomment._id}},{new: true})
.populate("comments")
.exec();
res.status(200).json({                                  //pull:for delete
    success:true,
    data:updatepost,
    message:"comment created successfully"
})
    }
catch(err){
        console.error(err);
        console.log(`can not create post! ${err}`);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message: err.message
        
        })
    }
}

module.exports=createcomment;