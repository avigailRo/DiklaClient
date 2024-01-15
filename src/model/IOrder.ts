import IOrderItem from "./IOrderItem";
import IUser from "./IUser";

export default interface IOrder {
    user: IUser,
    orderItem:IOrderItem[],
    date: Date}