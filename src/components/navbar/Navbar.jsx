import React from "react";

import "../../styles/components/navbar.scss";

import Avatar from "@mui/material/Avatar";

//redux
import { connect } from "react-redux";

const Navbar = ({ userDetails }) => {
  console.log(userDetails?.profilePic);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>WhizStream</h1>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar__profile">
        <Avatar alt="Remy Sharp" src={userDetails?.profilePic} />
      </div>
    </div>
  );
};

const mapStoreStateToProps = ({ auth, project }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(Navbar);
