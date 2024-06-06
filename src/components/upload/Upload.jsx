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

//redux
import { getSnackbarActions } from "../../store/actions/snackbarActions";
import { connect } from "react-redux";
import { Box, Container, Paper, Stack } from "@mui/material";

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

const Upload = ({ open, handleClose, setSnackbar }) => {
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
    setSnackbar(true, "Video uploaded successfully", "success");
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
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
        <h2>Upload Video</h2>
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
    </Backdrop>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getSnackbarActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Upload);
