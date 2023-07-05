const { Int32 } = require("mongodb");
const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const counterSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
    
    totalPost: {
        type: Number,
        required: true,
    },
     
  },
  {
    timestamp: false
  }
);

const Counter = mongoose.model('Counter', counterSchema);
module.exports = Counter;