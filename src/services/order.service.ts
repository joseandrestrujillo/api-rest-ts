import { IOrder } from "../interfaces/order.interface";
import OrderModel from "../models/order";

const getOrders = async () => await OrderModel.find({});
const getOrder = async (id: string) => await OrderModel.findOne({_id:id});
const createOrder = async (order: IOrder) => await OrderModel.create(order);
const updateOrder = async (id: string, newOrder: IOrder) => await OrderModel.findOneAndUpdate({_id:id}, newOrder);
const deleteOrder = async (id: string) => await OrderModel.findOneAndDelete({_id:id});

export default {getOrders, getOrder,createOrder, updateOrder, deleteOrder};