//FOR ROUTER SETUP
const express = require("express");
const router = express.Router();
//FROM MODEL SCHEMA FOLDER
const Hotel = require("../models/hotel.js");
// const { createError } = require("../utils/error.js");
const {createHotel,updateHotel,deleteHotel,getHotel,getAllHotel} = require("../controllers/hotel.js");
const {verifyToken,verifyAdmin,verifyUser} = require("../utils/verifytokem.js");


//create method
router.post("/",verifyAdmin,createHotel)

//update method
router.put("/:id",verifyAdmin,updateHotel)

//delete method

router.delete("/:id",verifyAdmin,deleteHotel)
//get method

router.get("/:id",getHotel)

//get all method

router.get("/",getAllHotel)


module.exports =  router