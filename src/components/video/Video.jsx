import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
// import { getPreSignedURL } from "../../apis/video/playVideo.js";
// import { useNavigate } from "react-router";

// import { Button, Box } from "@mui/material";
import { Box } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Video = () => {
  const { id } = useParams();
  // const navigate = useNavigate();

  const [quality, setQuality] = React.useState(1080);

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  // const [url, setUrl] = React.useState("");

  // const [qualityURL, setQualityURL] = React.useState(
  //   `https://ws-streaming-videos-bucket.s3.ca-central-1.amazonaws.com/processed/${id}/${quality}p.m3u8`
  // );
  // console.log(qualityURL);
  // React.useEffect(() => {
  //   const data = {
  //     videoId: id,
  //   };

  //   const getURL = async () => {
  //     const response = await getPreSignedURL(data);
  //     if (response.status === 200) {
  //       setUrl(response.data.url);
  //     }
  //     // cehck that url has data or not using curl or something
  //     // if not then set url to default
  //     // else set url to response.data.url

  //   };

  //   getURL();
  // }, [id, navigate, setUrl]);

  return (
    <Box
      padding={5}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <VideoPlayer
        url={`https://ws-streaming-videos-bucket.s3.ca-central-1.amazonaws.com/processed/${id}/${quality}p.m3u8`}
      />

      {/* <Button
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
      </Button> */}

      <FormControl
        sx={{
          width: "100px",
          marginTop: 2,
        }}
      >
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1080}>1080p</MenuItem>
          <MenuItem value={720}>720p</MenuItem>
          <MenuItem value={480}>480p</MenuItem>
          <MenuItem value={360}>360p</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Video;
