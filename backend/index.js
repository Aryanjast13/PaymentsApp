require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const mainRouter = require('./routes/index');



const app = express();
app.use(cors()); // using cors to give access our frontend 
app.use(express.json());    //parsing the json data


//using the routing 
app.use("/api/v1", mainRouter);


//connecting the database
connectDB().then(()=>app.listen(3800, () => console.log("Server running on port 3800"))).catch((err)=>console.log(err))








