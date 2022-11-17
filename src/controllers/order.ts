import { Request, Response } from "express"
import services from "../services/order.service";
import { handleHttp } from "../utils/error.handle";

const getOrders = async (req: Request, res: Response) => {
    try {
        const response = await services.getOrders();
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR getOrders', error);
    }
}


export {getOrders}