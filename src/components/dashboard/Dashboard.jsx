import React from "react";
import "../../styles/components/dashboard.scss";

//redux
import { connect } from "react-redux";

const Dashboard = ({ userDetails }) => {
  return (
    <div className="dashboard">
      <h1>Welcome {userDetails?.username}</h1>
    </div>
  );
};

const mapStoreStateToProps = ({ auth, project }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(Dashboard);
