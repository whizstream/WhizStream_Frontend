import { useNavigate } from "react-router";
import React, { useEffect } from 'react'

import { Button } from '@mui/material';

import { logout } from '../utils/logout';


//style
import "../styles/home.scss";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    }
  }, [navigate]);
  return (
    <div className='home'>
      <h1>Home </h1>
      <Button
        variant="contained"
        sx={{
          height: "35px",
          fontSize: "15px"
        }}
        onClick={logout}
      >
        Log out
      </Button>
    </div>
  )
}

export default Home