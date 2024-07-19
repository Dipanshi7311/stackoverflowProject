import express from "express";
import { login, signup, resetPassword } from '../controller/auth.js';
import { getallusers, updateprofile } from "../controller/users.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/reset-password", resetPassword); // Add this line for password reset

router.get("/getallusers", getallusers);
router.patch("/update/:id", auth, updateprofile);

export default router;
