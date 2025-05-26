const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URL + "paymentsApp");
        console.log(`Database Connected: ${connect.connections}`);
        
    } catch (error) {
        console.log(`Database not Connected: ${error.message}`);
        
    }
}



module.exports = connectDB;