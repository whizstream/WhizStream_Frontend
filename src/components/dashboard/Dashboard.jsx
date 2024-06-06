import React from "react";

//redux
import { connect } from "react-redux";
import { Button, Stack } from "@mui/material";

const Dashboard = ({ userDetails }) => {
  return (
    <Stack spacing={2} direction="row" padding={10}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

const mapStoreStateToProps = ({ auth, project }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(Dashboard);
