const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute =require("./routes/auth.js");
const roomRoute =require("./routes/rooms.js");
const hotelRoute =require("./routes/hotels.js");
const usersRoute =require("./routes/users.js");
const { default: mongoose } = require("mongoose");
const cookie = require("cookie-parser"); //this one we use as middleware from the jsonwebtoken

dotenv.config();

//Database connection

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")
;    }catch(error){
        console.log(error);
    };
}

//if in between connectionn to database disrupted. this message will alert

mongoose.connection.on("disconnected",()=>{
    console.log("Database Disconnected!");
});

mongoose.connection.on("connected",()=>{
    console.log("Database Connected!")
});



//MIDDLEWARE
app.use(cookie());
//WITHOUT THIS JSON CANNOT BE REQUEST.
app.use(express.json());





//ROUTE SEARCH
app.use("/api/auth",authRoute);
app.use("/api/hotel",hotelRoute);
app.use("/api/rooms",roomRoute);
app.use("/api/users",usersRoute);

//MIDDLEWARE
app.use((err,req,res,next)=>{
    const errorStatus = err.Status || 500
    const errorMessage = err.message || "something went wrong Arun"
    return res.status(errorStatus).json({Message:errorMessage})
})


app.listen(5000 , ()=>{
    connection();
    console.log("Backend server running successfully!");
})

