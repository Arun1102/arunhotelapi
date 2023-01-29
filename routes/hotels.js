//FOR ROUTER SETUP
const express = require("express");
const router = express.Router();
//FROM MODEL SCHEMA FOLDER
const Hotel = require("../models/hotel.js");
// const { createError } = require("../utils/error.js");
const {createHotel,updateHotel,deleteHotel,getHotel,getAllHotel} = require("../controllers/hotel.js");



//create method
router.post("/",createHotel)

//update method
router.put("/:id",updateHotel)

//delete method

router.delete("/:id",deleteHotel)
//get method

router.get("/:id",getHotel)

//get all method

router.get("/",getAllHotel)


module.exports =  router