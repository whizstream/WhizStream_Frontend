import axios from "axios";
export const uploadFileToS3 = async (url, file) => {
  try {
    await axios.put(url, file, {
      headers: {
        "Content-Type": "video/mp4",
      },
    });
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};
