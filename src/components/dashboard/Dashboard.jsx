import React from "react";

//redux
import { connect } from "react-redux";
import { Box, Button, Grid, Stack } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

//components
import Video from "../video/Video";

// apis
import { getVideos } from "../../apis/video/getVideos";

const Dashboard = () => {
  const [loader, setLoader] = React.useState(true);
  const [videos, setVideos] = React.useState([]);
  React.useEffect(() => {
    const fetchVideos = async () => {
      const videos = await getVideos();
      setVideos(videos?.data);
    };
    fetchVideos();
    setLoader(false);
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
        <Grid container spacing={2}>
          {videos?.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

const mapStoreStateToProps = ({ auth, project }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(Dashboard);
