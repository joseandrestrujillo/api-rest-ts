import { IPhone } from "../interfaces/phone.interface";
import ItemModel from "../models/items";

const insertItem = async (item: IPhone) => await ItemModel.create(item);
const getItems = async () => await ItemModel.find({});
const getItem = async (id: string) => await ItemModel.findOne({_id:id});
const updateItem = async (id: string, data: IPhone) => await ItemModel.findOneAndUpdate({_id:id}, data, {new: true});
const deleteItem = async (id: string) => await ItemModel.findOneAndDelete({_id:id});

export default {insertItem, getItems, getItem, updateItem, deleteItem};