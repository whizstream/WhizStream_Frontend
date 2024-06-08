import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

const Video = ({ video }) => {
  const currentTime = new Date();
  const createdAt = new Date(video?.createdAt);
  const timeDifference = Math.abs(currentTime - createdAt);
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  return (
    <Grid item lg={3} md={5} sm={6} xs={12}>
      <Stack>
        <img
          src="https://picsum.photos/300/200"
          alt="video"
          style={{ borderRadius: "10px" }}
        />
        <Typography variant="h6">{video?.Title}</Typography>
        <Typography variant="subtitle2">@{video?.User?.username}</Typography>
        <Typography variant="subtitle2">
          {minutesDifference} minutes ago
        </Typography>
      </Stack>
    </Grid>
  );
};

export default Video;
