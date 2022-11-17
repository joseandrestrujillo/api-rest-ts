import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJWT } from "../middleware/session";
const router= Router();
/**
 * localhost:3002/order [GET]
 * Solo pueden acceder usuarios que tengan una sesión activa (JWT valido)
 */
router.get("/", checkJWT, getOrders);


export { router };