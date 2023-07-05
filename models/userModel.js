const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// create an schema
const userSchema = mongoose.Schema(
    {
        name: String,
        email: String
    }
);

const User = mongoose.model('Users',userSchema);
 
module.exports = User;
