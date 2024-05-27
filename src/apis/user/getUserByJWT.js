import axios from "axios";
import URL from "../url";

export const authLogin = async (token) => {
  if (token) {
    const data = {
      token,
    };
    const res = await axios.post(`${URL}/api/user/getUserByJWT`, data);
    return res.data;
  }
  return null;
};
