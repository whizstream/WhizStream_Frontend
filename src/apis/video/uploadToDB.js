import axios from "axios";
import URL from "../url";

export const uploadToDB = async (data) => {
  if (data?.token) {
    const res = await axios.post(`${URL}/api/video/upload`, data);
    return res.data;
  }
  return null;
};
