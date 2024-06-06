import axios from "axios";
const URL =
  "https://na7pbumxqbdtuf67aqj532vggm0qphuu.lambda-url.ca-central-1.on.aws/";

export const getPresignedURL = async () => {
  const data = axios.get(URL);
  return data;
};
