const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const trainSchema = mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        },

        pushup: {
            type: Number,
            required : false,
            default: 0,
        },

        stomach: {
        type: Number,
        required: false,
        },

        squat: {
            type: String,
            required: false,
            },
    
        arm: {
            type: Number,
            required : false,
            default: 0,
        },

        uplift: {
        type: Number,
        required: false,
        },

        upheel: {
            type: Number,
            required: false,
            },
    
        kick_on_chair: {
            type: String,
            required: false,
            },
    
        spreading_thigh: {
            type: Number,
            required : false,
            default: 0,
        },

        date: {
        type: String,
        required: true,
        },
    },
    {
        timestamp: true
    }
)

const Train = mongoose.model('Train', trainSchema)

module.exports = Train;