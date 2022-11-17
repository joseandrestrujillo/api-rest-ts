import { NextFunction, Request, Response } from "express"
import { verifiedJWT } from "../utils/jwt.handle";

const checkJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
        /**
         * Debe existir un header Authoritation: Bearer {JW_TOKEN}
         */
        const { authorization } = req.headers;
        
        if (!authorization) throw new Error();
        
        const jwt = authorization.split(' ').pop();

        if (! verifiedJWT(`${jwt}`)) throw new Error();

        next();
    } catch (error) {
        res.status(400);
        res.send("INVALID SESION");
    }
}

export {checkJWT}