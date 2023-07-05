const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const registerSchema = mongoose.Schema(
    {
      id: {
          type: String,
          required: true,
        },
      
      pw: {
          type: String,
          required: true,
      },
       
    },
    {
      timestamp: false
    }
  );

const Register = mongoose.model('Register', registerSchema);
module.exports = Register;