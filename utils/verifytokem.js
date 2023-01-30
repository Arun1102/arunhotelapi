const { createError } = require("../utils/error.js");
const JWT = require("jsonwebtoken"); 


const verifytoken = (req,res,next)=>{
    const token = req.cookies.acess_token;
    if(!token){
        return next(createError(400,"you are not authenticated"))
    }

    JWT.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(createError(400,"your token is not valid lad!"));
        }

        req.userInfo = user;
        next()
    })
}


module.exports = {verifytoken}
