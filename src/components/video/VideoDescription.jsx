import React from "react";
import { Box } from "@mui/material";

const VideoDescription = ({ description }) => {
  return (
    <Box
      border={1}
      padding={2}
      margin={1}
      borderRadius={5}
      sx={{
        overflowY: "auto",
        maxHeight: "200px",
      }}
    >
      <h1>Description</h1>
      <p>{description}</p>
    </Box>
  );
};

export default VideoDescription;
