const express = require("express");

const router = express.Router();
const {updateUser,deleteUser,getUser,getAllUser} = require("../controllers/User.js");
const {verifyToken,verifyAdmin,verifyUser} = require("../utils/verifytokem.js")


// //creating middleware for authentication (testing purpose)
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user, your token is valid and you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and can delete your account");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello admin, you are logged in and can delete all account");
//     // res.send(req.user.isAdmin);
// })





//create method
// router.post("/",createUser)

//update method
router.put("/:id",verifyUser,updateUser)

//delete method

router.delete("/:id",verifyUser,deleteUser)
//get method

router.get("/:id",verifyUser,getUser)

//get all method

router.get("/",verifyAdmin,getAllUser)


module.exports =  router