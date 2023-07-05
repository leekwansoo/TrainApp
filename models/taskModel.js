const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const taskSchema = mongoose.Schema(
  {		
	  	title: {
			type: String,
			required: true,
		},
  
	   	date: {
			type: String,
			required: true,
		},

		작성자: {
			type: String,
			required: true,
		},
	},
	{
	  timestamp: true
	}
  );

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;