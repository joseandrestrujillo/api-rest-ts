import { Router } from "express";
import { registerController, loginController } from "../controllers/auth";

const router= Router();
/**
 * localhost:3002/auth/ [POST]
 */
router.post("/register", registerController);
router.post("/login", loginController);


export { router };