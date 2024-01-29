import express from "express";
import { login, register,update } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)

router.post("/update", update);

export default router;