const express = require("express");
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  assignUsersToProject,
} = require("../controllers/projectController");
const { auth, isAdmin } = require("../middleware/auth");

const router = express.Router();


router.use(auth);


router.get("/", getProjects);

router.get("/:id", getProjectById);


router.post("/", isAdmin, createProject);


router.put("/:id", isAdmin, updateProject);


router.delete("/:id", isAdmin, deleteProject);


router.put("/:id/assign", isAdmin, assignUsersToProject);

module.exports = router;
