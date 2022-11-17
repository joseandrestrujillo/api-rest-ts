import { Schema, Types, model, Model} from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>(
    {
        email: { 
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        name: { 
            type: String,
            required: true
        },
        description:{
            type: String,
            default: "empty"
        }
    },
    {
        timestamps: true,
        versionKey:false
    }
);

const UserModel = model('user', UserSchema);

export default UserModel;