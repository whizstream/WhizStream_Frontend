import React from "react";
import { Box, styled } from "@mui/material";
import bg from "../assets/bg.jpg";
import { useNavigate } from "react-router";
import URL from "../apis/url";

import Loader from "../components/utils/Loader";

const Google = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const getUser = () => {
      fetch(`${URL}/api/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((data) => {
          if (data?.statusCode === 200) {
            localStorage.setItem("token", data?.data?.token);
          }
          navigate("/");
        })
        .catch(() => {
          navigate("/auth");
        });
    };
    getUser();
  }, [navigate]);

  const FullScreenCenterContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });
  return (
    <FullScreenCenterContainer>
      <Loader />
    </FullScreenCenterContainer>
  );
};

export default Google;
