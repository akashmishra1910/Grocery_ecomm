import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import {isAuthUser, loginUser,logoutUser } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/authUser.js";
//import { logout } from "../controllers/user.controller.js";
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout",authUser,logoutUser);
router.get("/is-auth",authUser,isAuthUser);

export default router;
