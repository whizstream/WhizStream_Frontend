import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="h1">404 | Page Not Found</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
    </Stack>
  );
};

export default PageNotFound;
