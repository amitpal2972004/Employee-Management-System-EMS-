// taskController.js

import Task from "../models/Task.js";
import User from "../models/User.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, category, date, status } = req.body;

    // Validate employee exists
    const employee = await User.findById(assignedTo);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Create task with all fields
    const task = await Task.create({ 
      title, 
      description, 
      assignedTo: [assignedTo], 
      category,
      date,
      status: status || "new"
    });

    // Populate employee details before sending response
    await task.populate("assignedTo", "firstName lastName email");

    res.status(201).json({ 
      message: "Task created successfully", 
      task 
    });
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};

// Get all tasks (Admin)
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("assignedTo", "firstName lastName email role")
      .sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error("Get all tasks error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//  Get tasks by employee ID (Employee) - FIXED
export const getTasksByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find tasks where this user is in assignedTo array
    const tasks = await Task.find({ 
      assignedTo: userId 
    })
    .populate("assignedTo", "firstName lastName email")
    .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    console.error("Get tasks by user error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};

//  Update task status (Employee)
export const updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ["new", "in-progress", "completed", "failed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ 
        message: "Invalid status. Must be: new, in-progress, completed, or failed" 
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status },
      { new: true }
    ).populate("assignedTo", "firstName lastName email");

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error("Update task error:", error);
    res.status(500).json({ 
      message: "Error updating status", 
      error: error.message 
    });
  }
};

//  Get all employees (for dropdown)
export const getEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" })
      .select("firstName lastName email")
      .sort({ firstName: 1 });
    res.json(employees);
  } catch (error) {
    console.error("Get employees error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//  Get all employees with their tasks (for admin dashboard)
export const getEmployeesWithTasks = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" })
      .select("firstName lastName email")
      .sort({ firstName: 1 });

    // Fetch tasks for each employee
    const employeesWithTasks = await Promise.all(
      employees.map(async (emp) => {
        const tasks = await Task.find({ assignedTo: emp._id });
        return {
          _id: emp._id,
          firstName: emp.firstName,
          lastName: emp.lastName,
          email: emp.email,
          tasks: tasks
        };
      })
    );

    res.json(employeesWithTasks);
  } catch (error) {
    console.error("Get employees with tasks error:", error);
    res.status(500).json({ message: "Server error" });
  }
};