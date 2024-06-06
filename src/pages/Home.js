import { useNavigate } from "react-router";
import React, { useEffect } from "react";
// router
import { Routes, Route } from "react-router-dom";

import axios from "axios";

// redux
import { connect } from "react-redux";
import { getAuthActions } from "../store/actions/authActions";
import URL from "../apis/url";

//components
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "../components/dashboard/Dashboard";
import MuiNavbar from "../components/navbar/MuiNavbar";
import Upload from "../components/dashboard/Upload";
import { Stack } from "@mui/material";
import MuiSidebar from "../components/sidebar/MuiSidebar";

const Home = ({ login, userDetails, theme, setTheme }) => {
  const navigate = useNavigate();

  const setUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        const url = `${URL}/api/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        if (data) {
          localStorage.setItem("token", data?.data?.token);
          navigate("/");
        }
      }
    } catch (err) { }
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
    <Stack sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiNavbar />
      <Stack direction="row">
        <MuiSidebar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Stack>
    </Stack>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAuthActions(dispatch),
  };
};

const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Home);
