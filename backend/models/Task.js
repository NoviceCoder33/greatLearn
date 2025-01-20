const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["To-Do", "In Progress", "Completed"], default: "To-Do" },
  deadline: { type: Date, required: true },
  assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
});

module.exports = mongoose.model("Task", taskSchema);
