import axios from "axios";
import { GET_ALL_PETIPUR_BY_CATEGORY_ID } from "../config/config";
export const getAllPetipurByCategoryId = async (categoryid:string|undefined) => {
    return await axios.get(`${GET_ALL_PETIPUR_BY_CATEGORY_ID}/${categoryid}`);
}