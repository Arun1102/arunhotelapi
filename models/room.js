const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    maxPeople:{type:Number,required:true},
    desc:{type:String,default:true},
    roomNumber:[{number:Number, unavailableDates:{type:[Date]}}],
},{timestamps:true});



//example of the data that looks like the schema
// {number:101,unavailableDates:[01.05.2022,02.05.2022]}
// {number:102,unavailableDates:[01.05.2022,04.05.2022]}
// {number:103,unavailableDates:[03.05.2022,05.05.2022]}

module.exports = mongoose.model("Room",roomSchema);