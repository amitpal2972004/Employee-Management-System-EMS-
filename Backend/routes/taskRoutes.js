import express from "express";
import {
  createTask,
  getAllTasks,
  getTasksByUser,
  updateTaskStatus,
  getEmployees,            
  getEmployeesWithTasks    
} from "../controllers/taskController.js";

const router = express.Router();


router.get("/employees", getEmployees);
router.get("/employees-with-tasks", getEmployeesWithTasks);

// Admin create task
router.post("/", createTask);

// Admin or employee view all tasks
router.get("/", getAllTasks);

// Employee view their assigned tasks
router.get("/:userId", getTasksByUser);

// Update status
router.put("/:taskId", updateTaskStatus);

export default router;
