const User = require("../models/user.js")
var bcrypt = require("bcrypt");
const { createError } = require("../utils/error.js");
const JWT = require("jsonwebtoken")  ///this is to carry the userid information across the web surfing.(ex: isadmin)
const registerUser = async (req,res,next)=>{
    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            username:req.body.username,
            email :req.body.email,
            password:hash
        })
        // const savedUser = await newUser.save();
        await newUser.save();
        res.status(200).send("User has been created");
    }catch(err){
        next(err);
    }
}

const loginUser = async (req,res,next)=>{

    
    try{
        const user= await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"User not found my lad!"));
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400,"Wrong username/password my lad"));

        //jwt token
        const token = JWT.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT_SECRET);


        const {password, isAdmin, ...other} = user._doc
        //httpOnly is for security purpose to reach this cookie
        res.cookie("acess_token", token, {httpOnly:true}).status(200).json({...other});
    }catch(err){
        next(err);
    }
}


module.exports = {registerUser,loginUser}