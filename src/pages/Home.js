import { useNavigate } from "react-router";
import React, { useEffect } from "react";
// router
import { Routes, Route } from "react-router-dom";

//style
import "../styles/home.scss";

import axios from "axios";

// redux
import { connect } from "react-redux";
import { getAuthActions } from "../store/actions/authActions";
import URL from "../apis/url";

//components

import Dashboard from "../components/dashboard/Dashboard";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Upload from "../components/dashboard/Upload";

const Home = ({ login, userDetails }) => {
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
    } catch (err) {}
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
      <Navbar />
      <div className="home__content">
        <Sidebar />
        {/* here render dashboard or upload */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
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
