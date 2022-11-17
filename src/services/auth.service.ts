import { IAuth } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/encrypt.handle";

const registerUser = async (user: IUser) => {
    const exist = await UserModel.findOne({ email: user.email });
    if (exist) return "USER WITH THIS EMAIL ALREADY EXIST";
    
    const encryptPassword = await encrypt(user.password);
    const response = await UserModel.create({ ...user, password:encryptPassword });
    
    return response;
}

const loginUser = async (user: IAuth) => {    
    const userDB = await UserModel.findOne({ email: user.email });
    if (!userDB) return "INCORRECT CREDENTIALS";
    
    const passwordHash = userDB.password;
    const isCorrect = await verified(user.password, passwordHash); 

    if (!isCorrect) return "INCORRECT CREDENTIALS";


    return userDB;
}

export { registerUser, loginUser };