
import axios from "axios";

export const getPreSignedURL = async (data) => {
    const res = await axios.get("https://hec5g7jxz7jsofcynqc3r4vywu0qjdvk.lambda-url.ca-central-1.on.aws", data);
    return res.data;
};
