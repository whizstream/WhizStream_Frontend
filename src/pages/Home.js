import { useNavigate } from "react-router";
import React, { useEffect } from "react";

import { Button } from "@mui/material";

import { logout } from "../utils/logout";

//style
import "../styles/home.scss";

import axios from "axios";

// redux
import { connect } from "react-redux";
import { getAuthActions } from "../store/actions/authActions";
import URL from "../apis/url";

const Home = ({ login, userDetails }) => {
  const navigate = useNavigate();
  const [tk, setToken] = React.useState();

  const setUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        const url = `${URL}/api/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        if (data) {
          localStorage.setItem("token", data?.data?.token);
          setToken(data?.data?.token);
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUser();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    } else {
      login(token);
    }
  }, [login, navigate]);
  return (
    <div className="home">
      <h1>Home </h1>
      <p>Hello @{userDetails?.username}</p>
      <Button
        variant="contained"
        sx={{
          height: "35px",
          fontSize: "15px",
        }}
        onClick={logout}
      >
        Log out
      </Button>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAuthActions(dispatch),
  };
};

const mapStoreStateToProps = ({ auth, project }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Home);
