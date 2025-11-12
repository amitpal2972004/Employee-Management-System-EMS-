import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  date: { type: Date },
  assignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }],
  status: { 
    type: String, 
    enum: ["new", "in-progress", "completed", "failed"], 
    default: "new" 
  },
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
