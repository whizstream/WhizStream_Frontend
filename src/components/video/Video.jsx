import React from "react";
import { useParams } from "react-router-dom";
import { Button, Box, Stack } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
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
      padding={5}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <VideoPlayer url={url} />

      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: 2,
          marginRight: "auto",
          marginBottom: 2,
          padding: 2,
          borderRadius: 5,
          backgroundColor: "blue",
        }}
      >
        Edit Title
      </Button>
    </Box>
  );
};

export default Video;
