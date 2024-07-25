import React from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import VideoComments from "./VideoComments";
import { getPreSignedURL } from "../../apis/video/playVideo.js";
import { useNavigate } from "react-router";

const Video = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = {
    videoId: id,
  };

  const getURL = async () => {
    const response = await getPreSignedURL(data);
    if (response.status === 200) {
      setUrl(response.data.url);
    } else {
      navigate("/");
    }
  };

  React.useEffect(() => {
    getURL();
  }, [id]);

  const [url, setUrl] = React.useState("");

  return (
    <Box
      padding={2}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Stack width="75%">
        <VideoPlayer url={url} />
        <VideoDescription />
      </Stack>
      <VideoComments />
    </Box>
  );
};

export default Video;
