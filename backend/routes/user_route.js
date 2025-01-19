const router = require("express").Router();
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/user_controller");

router.get("/", getAllTasks);
router.get("/:id", getOneTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
