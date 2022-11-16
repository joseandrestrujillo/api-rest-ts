import { Request, Response, Router } from "express";

const router= Router();
/**
 * localhost:3002/items [GET]
 */
router.get("/", (req: Request, res: Response) => {
    res.send({
        data: "There are models"
    });
});


export { router };