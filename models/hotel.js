const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    distance:{type:String,required:true},
    photos:{type:[String]},
    title:{type:String , required:true},
    description:{type:String,required:true},
    rating:{type:Number,required:false,min:1,max:5},
    rooms:{type:[String]},
    cheapestPrice:{type:Number,required:true},
    featured:{type:Boolean,default:false},
});


module.exports = mongoose.model("Hotel",hotelSchema);