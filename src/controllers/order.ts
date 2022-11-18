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

const getOrder = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await services.getOrder(id);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR getOrder', error);
    }
}

const postOrder = async (req: Request, res: Response) => {
    try {
        const {body} = req;
        const response = await services.createOrder(body);
        res.send(response);         
    } catch (error) {
        handleHttp(res, 'ERROR getOrder', error);
    }
}

const putOrder = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const { body } = req;
        const response = await services.updateOrder(id, body);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR getOrder', error);
    }
}

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await services.deleteOrder(id);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR getOrder', error);
    }
}

export {getOrders, getOrder, postOrder, putOrder, deleteOrder}