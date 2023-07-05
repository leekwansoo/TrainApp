const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const loginSchema = mongoose.Schema(
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

const Login = mongoose.model('Login', loginSchema);
module.exports = Login;