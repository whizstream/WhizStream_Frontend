import axios from "axios";
import URL from "../url";

export const authLogin = async () => {
  const res = await axios.get(`${URL}/api/auth/login/success`, {
    withCredentials: true,
  });
  return res.data;
};
