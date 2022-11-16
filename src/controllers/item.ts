import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR getItem');
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR getItems');
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR updateItem');
    }
}

const postItem = (req: Request, res: Response) => {
    try {
        const { body } = req;
        res.send(body);
    } catch (error) {
        handleHttp(res, 'ERROR postItem');
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR deleteItem');
    }
}

export {getItem, getItems, deleteItem, updateItem, postItem}