const Post = require("../models/postmodel");
const like = require("../models/likes");

const liking = async(req,res)=>{
    try{
    const {post,user} = req.body;
    const nl = new like({post,user});
    const savedlike = await nl.save();
    const updatepost = await Post.findByIdAndUpdate(post,{$push:{likes: savedlike._id}},{new: true})
.populate("likes")
.exec();
    res.status(200).json({
        success:true,
        data:updatepost,
        message:"liked!!"
    })}
    catch(err){
        console.log("some error!");
    }
}
const disliking = async(req,res)=>{
    try{
        const {postid,likeid} = req.body
        const deletedlike = await like.findOneAndDelete({post:postid,_id:likeid})
        const updatedpost = await Post.findByIdAndUpdate(postid,{$pull: {likes:deletedlike._id}},{new:true})
   res.status(200).json({
    success:true,
    data:updatedpost
   })
    }
    catch(err){
        
        console.log("some error!");
        console.log("error in disliking")
        res.status(500).json({
            success:false,
            data:err
        })
    }
}

module.exports={liking,disliking};

