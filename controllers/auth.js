const User = require("../models/user.js")

const registerUser = async (req,res,next)=>{
    try{
        const newUser = new User()
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        next(err);
    }
}


module.exports = {registerUser}