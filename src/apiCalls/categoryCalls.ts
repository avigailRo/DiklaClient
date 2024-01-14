import axios from "axios";
import { GET_ALL_CATEGORIES } from "../config/config";
export const getAllCatgories = async () => {
    return await axios.get(`${GET_ALL_CATEGORIES}`);
}