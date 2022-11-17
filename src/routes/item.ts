import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router= Router();
/**
 * localhost:3002/items [GET]
 */
router.post("/", postItem);
router.get("/", logMiddleware, getItems);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);


export { router };