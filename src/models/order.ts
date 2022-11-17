import { Schema, Types, model, Model} from "mongoose";
import { IOrder } from "../interfaces/order.interface";

const OrderSchema = new Schema<IOrder>(
    {
        model: { 
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey:false
    }
);

const OrderModel = model('order', OrderSchema);

export default OrderModel;