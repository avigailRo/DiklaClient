const BASE_URL = 'http://localhost:3000';
const LOGIN = `${BASE_URL}/users/login`;

const SIGNUP = `${BASE_URL}/users/register`;
const GET_ALL_CATEGORIES=`${BASE_URL}/categories/`
const GET_ALL_PETIPUR_BY_CATEGORY_ID=`${BASE_URL}/petipurs/GetByCategoryId`
const ADD_ORDER_ITEM=`${BASE_URL}/orderItems`;
const GET_ORDER=`${BASE_URL}/orders/getByUserId`;
const CALCULATE_PAYMENT_AMOUNT=`${BASE_URL}/orders/calculatePaymentAmount`;
const PAYMENT=`${BASE_URL}/orders/payment`;
const DELETE_ORDERITEM=`${BASE_URL}/orderItems`
export {DELETE_ORDERITEM, PAYMENT,BASE_URL,SIGNUP,LOGIN,GET_ALL_CATEGORIES,GET_ALL_PETIPUR_BY_CATEGORY_ID,ADD_ORDER_ITEM,GET_ORDER,CALCULATE_PAYMENT_AMOUNT}
export const PALLETE = {
    BLUE: '#6794CF',
    YELLOW: '#FAE282',
    RED: '#CB706D',
    GREEN: '#E5F6E0',
    ORANGE: '#FBA993',
    WHITE: '#FFFFFF',
    GRAY: '#F2E7D5',
}
