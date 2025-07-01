const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI );
        console.log(`Database Connected`);
        
    } catch (error) {
        console.log(`Database not Connected: ${error.message}`);
        
    }
}



module.exports = connectDB;