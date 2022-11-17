import { Schema, Types, model, Model} from "mongoose";
import { IPhone } from "../interfaces/phone.interface";

const ItemSchema = new Schema<IPhone>(
    {
        model: { 
            type: String,
            required: true
        },
        color:{
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        so: {
            type: String,
            enum: ['Android', 'IOS'],
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey:false
    }
);

const ItemModel = model('phone', ItemSchema);

export default ItemModel;