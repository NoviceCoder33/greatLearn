const Task = require("../models/Task");
const Project = require("../models/Project");

// Create a new task within a project
exports.createTask = async (req, res) => {
  try {
    const { projectId, title, description, status, deadline, assignedUser } = req.body;

    // Check if the project exists and the user owns it
    const project = await Project.findOne({ _id: projectId, owner: req.user.id });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const task = await Task.create({
      title,
      description,
      status,
      deadline,
      assignedUser,
      project: projectId,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

// Get tasks for a specific project
exports.getTasksByProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    // Check if the project exists and the user owns it
    const project = await Project.findOne({ _id: projectId, owner: req.user.id });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const tasks = await Task.find({ project: projectId }).populate("assignedUser", "name email");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, deadline, assignedUser } = req.body;

    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, status, deadline, assignedUser },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error
