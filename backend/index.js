require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser=require('cookie-parser')
const connectDB = require('./db');
const mainRouter = require('./routes/index');



const app = express();
console.log(process.env.CLIENT_URL);
app.use(cors({
    origin:"*",
    credentials:true,
})); // using cors to give access our frontend 
app.use(cookieParser())
app.use(express.json());    //parsing the json data


//using the routing 
app.use("/api/v1", mainRouter);


//connecting the database
connectDB().then(()=>app.listen(3800, () => console.log("Server running on port 3800"))).catch((err)=>console.log(err))








