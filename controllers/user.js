
const User = require("../models/user.js");
const { createError } = require("../utils/error.js");
//create method

// const createUser = async (req,res,next)=>{

//     const newUser = new User(req.body)

//     try{
//         const savedUser = await newUser.save();
//         res.status(200).json(savedUser);
//     }catch(err){
//         next(err)
//     }
// }



//update method
const updateUser= async (req,res,next)=>{
    
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updateUser);
    }catch(err){
        next(err);
    }
}

const deleteUser = async (req,res,next)=>{

    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }catch(err){
        next(err);
    }
}


//get method

const getUser = async(req,res,next)=>{
    
    try{
        const Userlist = await User.findById(req.params.id)
        res.status(200).json(Userlist);
    }catch(err){
       next(err);
    }

}

const getAllUser = async(req,res,next)=>{
    
    
    try{
        const Userlist = await User.find();
        res.status(200).json(Userlist);
    }catch(err){
        // res.status(500).json(err);
        next(err)
    }

}


module.exports =  {updateUser,deleteUser,getUser,getAllUser}