const express = require("express");
const router = express.Router();
const { createProject, updateProject, deleteProject } = require("../controllers/projectController");
const authMiddleware = require("../middlewares/auth");

router.use(authMiddleware);

router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
