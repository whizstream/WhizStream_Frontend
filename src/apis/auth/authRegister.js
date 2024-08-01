import axios from "axios";
import URL from "../url";

export const authRegister = async (email, password, username) => {
    if (email && password && username) {
        const data = {
            email: email,
            password: password,
            username: username,
        };
        const res = await axios.post(`${URL}/api/auth/register`, data);
        return res.data;
    }
    return null;
};
