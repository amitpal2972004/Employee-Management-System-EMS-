// controllers/adminController.js
import User from "../models/User.js";

// Admin adds new employee
export const addEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if employee already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    // Force role to 'employee'
    const newUser = new User({ name, email, password, role: "employee" });
    await newUser.save();

    res.status(201).json({ message: "Employee added successfully", user: newUser });
  } catch (error) {
    console.error("Add employee error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
