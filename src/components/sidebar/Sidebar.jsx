import React from "react";

import "../../styles/components/sidebar.scss";
import { Button } from "@mui/material";

import { connect } from "react-redux";

//mui
import Avatar from "@mui/material/Avatar";
import { CardHeader } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

//logout
import { logout } from "../../utils/logout";

const Sidebar = ({ userDetails }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <Button variant="text">Home</Button>
        <Button variant="text">Profile</Button>
        <Button variant="text">Settings</Button>
        <Button variant="text">Upload A video</Button>
      </div>
      <div className="sidebar__profile">
        {userDetails?.profilePic ? (
          <CardHeader
            avatar={<Avatar alt="Remy Sharp" src={userDetails?.profilePic} />}
            title={`@${userDetails?.username}`}
            titleTypographyProps={{ variant: "h5" }}
            sx={{
              padding: "0",
              fontSize: "1.5rem",
            }}
          />
        ) : (
          <CardHeader
            avatar={
              <Avatar>{userDetails?.username.toUpperCase().slice(0, 1)}</Avatar>
            }
            title={`@${userDetails?.username}`}
            titleTypographyProps={{ variant: "h5" }}
            sx={{
              padding: "0",
              fontSize: "1.5rem",
            }}
          />
        )}
        <Button variant="outlined" startIcon={<LogoutIcon />} onClick={logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>
    </div>
  );
};

const mapStoreStateToProps = ({ auth, project }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(Sidebar);
