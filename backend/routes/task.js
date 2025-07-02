const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  assignTask,
} = require("../controllers/taskController");
const { auth, isAdmin } = require("../middleware/auth");

const router = express.Router();


router.use(auth);


router.get("/", getTasks);


router.get("/:id", getTaskById);


router.post("/", isAdmin, createTask);


router.put("/:id", updateTask);


router.delete("/:id", isAdmin, deleteTask);


router.put("/:id/assign", isAdmin, assignTask);

module.exports = router;
