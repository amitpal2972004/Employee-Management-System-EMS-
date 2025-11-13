// routes/adminRoutes.js
import express from "express";
import { addEmployee } from "../controllers/adminController.js";

const router = express.Router();

router.post("/add-employee", addEmployee);

export default router;
