
const Hotel = require("../models/hotel.js");
const { createError } = require("../utils/error.js");
//create method

const createHotel = async (req,res,next)=>{

    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err)
    }
}



//update method
const updateHotel= async (req,res,next)=>{
    
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updateHotel);
    }catch(err){
        next(err);
    }
}

const deleteHotel = async (req,res,next)=>{

    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        next(err);
    }
}


//get method

const getHotel = async(req,res,next)=>{
    
    try{
        const hotellist = await Hotel.findById(req.params.id)
        res.status(200).json(hotellist);
    }catch(err){
       next(err);
    }

}

const getAllHotel = async(req,res,next)=>{
    
    
    try{
        const hotellist = await Hotel.find();
        res.status(200).json(hotellist);
    }catch(err){
        // res.status(500).json(err);
        next(err)
    }

}


module.exports =  {createHotel,updateHotel,deleteHotel,getHotel,getAllHotel}