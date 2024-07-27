const post= require('../models/postmodel');
const { json } = require('express');
const mongoose = require('mongoose')


const createpost = async(req,res)=>{
    try{
        const {title,body} = req.body;
        const np = new post ({title,body});
        const savedpost = await np.save();
        // const response = await post.create({title,body});
        res.status(200).json({
            success:true,
            data:savedpost,
            message:"post created successfully"
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

const getallpost = async(req,res) =>{
    try{
        const posts =await post.find().populate("likes").populate("comments").exec();
        res.json(
            posts
        )
    }
    catch(err){

    }
}

module.exports = {createpost,getallpost};



