import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'token.0101010';

const generateJWT = (email: string) => {
    const jwt = sign({email}, JWT_SECRET, {
        expiresIn: '6h'
    });
    return jwt;
}

const verifiedJWT = (jwt:string) => {
    const isCorrect = verify(jwt, JWT_SECRET);
    return isCorrect;
}

export { generateJWT, verifiedJWT };