const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const messageSchema = mongoose.Schema(
    {
    parent: {
          type: String,
          required: true,
        },
      
    content: {
          type: String,
          required: true,
      },
    
    date: {
        type: Date,
        required: true,
    },
    },
    {
      timestamp: true
    }
  );

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;