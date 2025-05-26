const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true,unique:true,trim:true,lowercase:true,minLength:3,maxLength:30 },
  password: { type: String, required: true ,minLength:6},
  firstName: { type: String, required: true ,trim:true,maxLength:20},
  lastName: { type: String, required: true,maxLength:20,trim:true },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
