import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const users = [
      { name: "Admin User", email: "admin@ems.com", password: "123456", role: "admin" },
      { name: "John Employee", email: "john@ems.com", password: "123456", role: "employee" },
      { name: "Mary Employee", email: "mary@ems.com", password: "123456", role: "employee" }
    ];

    await User.deleteMany(); // optional: clear old data
    await User.insertMany(users);
    console.log("✅ Users added successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding users:", error);
    process.exit(1);
  }
};

seedUsers();
