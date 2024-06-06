import React from "react";
import { useNavigate } from "react-router";

import Input from "../input/Input";
import Button from "@mui/material/Button";

import googleBtn from "../../assets/btn_google.png";

//redux
import { connect } from "react-redux";
import { getSnackbarActions } from "../../store/actions/snackbarActions";

//apis
import URL from "../../apis/url";
import { authLogin } from "../../apis/auth/authLogin";
import { Stack, Typography } from "@mui/material";

const Login = ({ setLogin, setSnackbar }) => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const register = () => {
    setLogin(false);
  };

  const loginHandler = async () => {
    let res = null;
    if (email && password) {
      res = await authLogin(email, password);
    }
    if (res?.statusCode === 200) {
      setSnackbar(true, "Logged in Successfull", "success");
      localStorage.setItem("token", res?.data?.token);
      navigate("/");
    } else {
      let message = res?.message || "Something went wrong";
      setSnackbar(true, message, "error");
    }
  };

  const googleAuth = () => {
    window.open(`${URL}/api/auth/google/callback`, "_self");
  };

  return (
    <Stack
      spacing={2}
      sx={{
        padding: {
          xs: 5,
          sm: 7,
          md: 10,
          lg: 10,
          xl: 10,
        },
      }}
    >
      <Typography variant="h4" textAlign={"center"}>
        Login
      </Typography>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <Button variant="contained" onClick={loginHandler}>
        Login
      </Button>

      <Button className="btn-auth" type="button" onClick={googleAuth}>
        <img className="btn-auth-img" src={googleBtn} alt="google sign in" />
      </Button>

      <Button onClick={register}>Create an account!</Button>
    </Stack>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getSnackbarActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Login);
