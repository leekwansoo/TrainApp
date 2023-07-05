const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const chatroomSchema = mongoose.Schema(
    {
      title: {
          type: String,
          required: true,
        },
      
      member: {
          type: Array,
          required: true,
      },
      date: {
        type: Date,
        required: true,
    },
       
    },
    {
      timestamp: false
    }
  );

const Chatroom = mongoose.model('Chatroom', chatroomSchema);
module.exports = Chatroom;