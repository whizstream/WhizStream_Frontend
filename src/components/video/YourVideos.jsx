import React from "react";

import { getMyVideos as getMyVideosAPI } from "../../apis/video/getMyVideos";
import Video from "./VideoBox";

import { Box, Grid } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const YourVideos = () => {
  const [videos, setVideos] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  const getMyVideos = async () => {
    const token = localStorage.getItem("token");
    const data = {
      token,
    };
    const res = await getMyVideosAPI(data);
    setVideos(res.data);
    setLoader(false);
  };

  React.useEffect(() => {
    getMyVideos();
  }, []);
  return (
    <Box
      padding={2}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      {loader ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#00BFFF"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {videos?.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default YourVideos;
