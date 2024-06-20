import axios from "axios";
import URL from "../url";

export const getVideos = async () => {
  const res = await axios.get(`${URL}/api/video/getall`);
  return res.data;
};
