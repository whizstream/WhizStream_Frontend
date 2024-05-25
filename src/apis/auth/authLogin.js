import axios from "axios";
import URL from "../url";

export const authLogin = async (email, password) => {
    console.log(email, password);
    if (email && password) {
        const data = {
            email: email,
            password: password
        };
        const res = await axios.post(`${URL}/api/auth/login`, data)
        return res.data;
    }
    return null;
}