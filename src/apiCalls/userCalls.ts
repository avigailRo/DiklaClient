import axios from "axios";
import { SIGNUP,LOGIN } from "../config/config";
import IUser from "../model/IUser";
export const login = async (email:string,password:string) => {
    return await axios.get(`${LOGIN}/${email}/${password}`);
}

export const signUp = async (user:IUser) => {
    return await axios.post(`${SIGNUP}`, user);
}



