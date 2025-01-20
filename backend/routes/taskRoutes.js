const express = require("express");
const router = express.Router();
const { createTask, updateTask, deleteTask } = require("../controllers/taskController");
const authMiddleware = require("../middlewares/auth");

router.use(authMiddleware);

router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;

