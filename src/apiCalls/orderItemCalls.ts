import axios from "axios";
import { ADD_ORDER_ITEM, DELETE_ORDERITEM } from "../config/config";
import IOrderItem from "../model/IOrderItem";
export const addOrderItem = async (orderItem:IOrderItem) => {
    return await axios.post(`${ADD_ORDER_ITEM}/${orderItem.user}`,orderItem);
}
export const deleteOrderItem = async (userId:string,orderId:string) => {
    return await axios.delete(`${DELETE_ORDERITEM}/${userId}/${orderId}`);
}