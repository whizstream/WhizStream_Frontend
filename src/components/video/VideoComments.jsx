import React from "react";
import { Box } from "@mui/material";

const VideoComments = () => {
  const comments = [
    {
      id: 1,
      user: "araval",
      comment: "This is a great video!",
    },
    {
      id: 2,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 3,
      user: "janedoe",
      comment: "This video is awesome!",
    },
    {
      id: 4,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 1,
      user: "araval",
      comment: "This is a great video!",
    },
    {
      id: 2,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 3,
      user: "janedoe",
      comment: "This video is awesome!",
    },
    {
      id: 4,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 1,
      user: "araval",
      comment: "This is a great video!",
    },
    {
      id: 2,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 3,
      user: "janedoe",
      comment: "This video is awesome!",
    },
    {
      id: 4,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 1,
      user: "araval",
      comment: "This is a great video!",
    },
    {
      id: 2,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 3,
      user: "janedoe",
      comment: "This video is awesome!",
    },
    {
      id: 4,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 1,
      user: "araval",
      comment: "This is a great video!",
    },
    {
      id: 2,
      user: "johndoe",
      comment: "I love this video!",
    },
    {
      id: 3,
      user: "janedoe",
      comment: "This video is awesome!",
    },
    {
      id: 4,
      user: "johndoe",
      comment: "I love this video!",
    },
  ];
  return (
    <Box
      width="25%"
      border={1}
      padding={2}
      margin={1}
      borderRadius={5}
      sx={{
        overflowY: "auto",
      }}
    >
      <h1>Comments</h1>
      {comments.map((comment) => (
        <Box key={comment.id} margin={1}>
          <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
        </Box>
      ))}
    </Box>
  );
};

export default VideoComments;
