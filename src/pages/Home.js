import React, { useEffect } from 'react'
import { useNavigate } from "react-router";


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
    <div className='home'>Home</div>
  )
}

export default Home