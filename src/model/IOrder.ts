import IOrderItem from "./IOrderItem";
import IUser from "./IUser";

export default interface IOrder {
    _id:string
    user: IUser,
    orderItem:IOrderItem[],
    date: Date}