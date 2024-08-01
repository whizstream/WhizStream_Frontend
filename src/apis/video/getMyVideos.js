import axios from "axios";
import URL from "../url";

export const getMyVideos = async (data) => {
    const res = await axios.post(`${URL}/api/video/getMyVideos`, data);
    return res.data;
};
