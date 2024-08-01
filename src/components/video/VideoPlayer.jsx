import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

// testing issue id

const VideoPlayer = ({ url }) => {
  return (
    <Box height="90%">
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
