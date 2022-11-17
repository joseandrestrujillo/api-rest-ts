import OrderModel from "../models/order";

const getOrders = async () => await OrderModel.find({});

export default {getOrders};