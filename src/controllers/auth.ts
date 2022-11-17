import { Request, Response } from "express";
import { registerUser, loginUser } from '../services/auth.service'

const registerController = async (req: Request, res: Response) => {
    const { email, password, name, description } = req.body;
    const response = await registerUser({ email, password, name, description });
    res.send(response);
}

const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const response = await loginUser({ email, password });
    res.send(response);
} 

export { registerController, loginController };