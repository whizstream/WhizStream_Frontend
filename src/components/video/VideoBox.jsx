import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Video = ({ video }) => {
  const navigate = useNavigate();

  const currentTime = new Date();
  const createdAt = new Date(video?.createdAt);
  const timeDifference = Math.abs(currentTime - createdAt);
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  let timeAgo;
  if (daysDifference > 0) {
    timeAgo = `${daysDifference} days ago`;
  } else if (hoursDifference > 0) {
    timeAgo = `${hoursDifference} hours ago`;
  } else {
    timeAgo = `${minutesDifference} minutes ago`;
  }
  const video_url = `https://ws-streaming-thumbnail-bucket.s3.ca-central-1.amazonaws.com/${video.VideoID}.jpeg`;
  console.log(video);
  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      xs={12}
      onClick={() => {
        navigate(`/video/${video.VideoID}`);
      }}
      sx={{
        cursor: "pointer",
      }}
    >
      <Stack>
        <img
          src={
            video.Processing === false
              ? video_url
              : "https://ws-streaming-thumbnail-bucket.s3.ca-central-1.amazonaws.com/ym_processing.png"
          }
          alt="video"
          style={{ borderRadius: "10px", width: "300px", height: "200px" }}
        />
        <Typography variant="subtitle2">@{video?.User?.username}</Typography>
        <Typography variant="subtitle2">{timeAgo}</Typography>
      </Stack>
    </Grid>
  );
};

export default Video;
