import React from "react";

//redux
import { connect } from "react-redux";
import { Stack } from "@mui/material";

const Dashboard = ({ userDetails }) => {
  return <Stack></Stack>;
};

const mapStoreStateToProps = ({ auth, project }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(Dashboard);
