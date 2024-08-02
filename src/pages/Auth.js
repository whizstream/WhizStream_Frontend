import React, { useEffect } from "react";
import { useNavigate } from "react-router";

//style
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { Box, styled } from "@mui/material";

// bg
import bg from "../assets/ym_bg.png"

//components

const Auth = () => {
  const [login, setLogin] = React.useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const FullScreenCenterContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  return (
    <FullScreenCenterContainer>
      <Box sx={{
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255, 0.5)",
        boxShadow: "0 0 10px 0 black",
      }}>
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </Box>

    </FullScreenCenterContainer>
  );
};

export default Auth;
