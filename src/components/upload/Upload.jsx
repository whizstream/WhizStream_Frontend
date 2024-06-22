import React from "react";
import { getPresignedURL } from "../../apis/video/getPresignedURL";
import { styled } from "@mui/material/styles";

//mui
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadIcon from "@mui/icons-material/Upload";
import LinearProgress from "@mui/material/LinearProgress";

// import "../../styles/components/upload.scss";
import axios from "axios";
import { uploadToDB } from "../../apis/video/uploadToDB";

//redux
import { getSnackbarActions } from "../../store/actions/snackbarActions";
import { connect } from "react-redux";
import { Container, Paper, Typography } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
//style

const Upload = ({ setSnackbar }) => {
  const [preSignedURL, setPreSignedURL] = React.useState(null);
  const [videoID, setVideoID] = React.useState(null);
  const [progress, setProgress] = React.useState(0);

  const setPresignedUrl = async () => {
    const { data } = await getPresignedURL();
    setPreSignedURL(data.uploadURL);
    setVideoID(data.videoId);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    await axios.put(preSignedURL, file, {
      onUploadProgress: (progressEvent) => {
        setProgress(
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
      },
    });
    setProgress(100);
    setProgress(0);
    const uploadtodb_data = await uploadToDB({
      VideoID: videoID,
      token: localStorage.getItem("token"),
    });
    if (uploadtodb_data?.statusCode === 200) {
      setSnackbar(true, "Video uploaded successfully", "success");
    } else {
      setSnackbar(true, "Failed to upload video", "error");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <Paper
        sx={{
          padding: {
            xs: 5,
            sm: 7,
            md: 10,
            lg: 10,
            xl: 10,
          },
          textAlign: "center",
        }}
        elevation={3}
      >
        <UploadIcon
          sx={{
            border: "0.2px solid #cfd3da",
            borderRadius: "100%",
            height: "200px",
            width: "200px",
            padding: "10px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            margin: "20px 0",
          }}
        >
          Upload Video
        </Typography>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            accept="video/mp4"
            onClick={setPresignedUrl}
            onChange={handleFileChange}
          />
        </Button>

        {progress > 0 && (
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              width: "50%",
              margin: "20px auto",
            }}
          />
        )}
      </Paper>
    </Container>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getSnackbarActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Upload);
