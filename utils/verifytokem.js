const { createError } = require("../utils/error.js");
const JWT = require("jsonwebtoken"); 


const verifyToken = (req,res,next)=>{
    const token = req.cookies.acess_token;
    if(!token){
        return next(createError(400,"you are not authenticated"))
    }

    JWT.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(createError(400,"your token is not valid lad!"));
        }

        req.user = user;
        next()
    })
}

const verifyUser = (req,res,next)=>{


  const token = req.cookies.acess_token;
    if(!token){
        return next(createError(400,"you are not authenticated"))
    }

    JWT.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(createError(400,"your token is not valid lad!"));
        }

        req.user = user;
        if (req.user.id === req.params.id || req.user.isAdmin) {
          next();
        } else {
          return next(createError(403, "You are not authorized!"));
        };
    })
   
    // verifyToken(req, res, next, () => {
    //     if (req.user.id === req.params.id || req.user.isAdmin) {
    //       next();
    //     } else {
    //       return next(createError(403, "You are not authorized!"));
    //     };
        
    // });
}


const verifyAdmin = (req, res, next) => {


  const token = req.cookies.acess_token;
    if(!token){
        return next(createError(400,"you are not authenticated"))
    }

    JWT.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(createError(400,"your token is not valid lad!"));
        }

        req.user = user;
        if (req.user.isAdmin) {
          next();
        } else {
          return next(createError(403, "You are not admin authorized!"));
        }
    })
   
    // verifyToken(req, res, next, () => {
    //   if (req.user.isAdmin) {
    //     next();
    //   } else {
    //     return next(createError(403, "You are not admin authorized!"));
    //   }
    // });
};



module.exports = {verifyToken,verifyUser,verifyAdmin}


