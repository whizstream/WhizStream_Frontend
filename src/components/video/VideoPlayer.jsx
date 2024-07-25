import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

const VideoPlayer = ({ url }) => {
  return (
    <Box height="70%">
      <ReactPlayer
        url={url}
        height="100%"
        width="100%"
        controls={true}
        playing={true}
        config={{
          attributes: {
            controlsList: "nodownload",
          },
        }}
      />
    </Box>
  );
};

export default VideoPlayer;
