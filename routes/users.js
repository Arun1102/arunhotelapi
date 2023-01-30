const express = require("express");

const router = express.Router();
const {updateUser,deleteUser,getUser,getAllUser} = require("../controllers/User.js");
const {verifytoken} = require("../utils/verifytokem.js")


//creating middleware for authentication
router.get("/checkauthentication", verifytoken, (req,res,next)=>{
    res.send("hello user, you are logged in");
})


//create method
// router.post("/",createUser)

//update method
router.put("/:id",updateUser)

//delete method

router.delete("/:id",deleteUser)
//get method

router.get("/:id",getUser)

//get all method

router.get("/",getAllUser)


module.exports =  router