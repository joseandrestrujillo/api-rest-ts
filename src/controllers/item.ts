import { Request, Response } from "express"
import services from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await services.getItem(id);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR getItem', error);
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await services.getItems();
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR getItems', error);
    }
}

const updateItem = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const response =  services.updateItem(id, body);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR updateItem', error);
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const response = await services.insertItem(body);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR postItem', error);
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = services.deleteItem(id);
        res.send(id);
    } catch (error) {
        handleHttp(res, 'ERROR deleteItem', error);
    }
}

export {getItem, getItems, deleteItem, updateItem, postItem}