import axios from "axios";
import { CALCULATE_PAYMENT_AMOUNT, GET_ORDER, PAYMENT } from "../config/config";
export const getOrder = async (userId:string) => {
    console.log(userId);
    
    return await axios.get(`${GET_ORDER}/${userId}`);
}
export const calculatePaymentAmount = async (userId:string,id:string) => {
    console.log("gifgggggggggggggggggg",userId,id);
    
    console.log(`${CALCULATE_PAYMENT_AMOUNT}/${id}/${userId}`,"nnnnnnnnnnn");  
    return await axios.get(`${CALCULATE_PAYMENT_AMOUNT}/${id}/${userId}`);
}
export const payment = async (userId:string,id:string) => {
    return await axios.patch(`${PAYMENT}/${userId}/${id}`);
}