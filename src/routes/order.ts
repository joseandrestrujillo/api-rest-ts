import { Router } from "express";
import { getOrders, getOrder, postOrder, putOrder, deleteOrder } from "../controllers/order";
import { logMiddleware } from "../middleware/log";
import { checkJWT } from "../middleware/session";

const router= Router();
/**
 * localhost:3002/order [GET]
 * Solo pueden acceder usuarios que tengan una sesión activa (JWT valido)
 */
router.get("/", checkJWT, logMiddleware, getOrders);
router.get("/:id", checkJWT, logMiddleware, getOrder);
router.post("/", checkJWT, logMiddleware, postOrder);
router.put("/:id", checkJWT, logMiddleware, putOrder);
router.delete("/:id", checkJWT, logMiddleware, deleteOrder);


export { router };