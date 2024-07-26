import React from "react";

import Input from "../input/Input";
import Button from "@mui/material/Button";

import URL from "../../apis/url";

//redux
import { connect } from "react-redux";
import { getSnackbarActions } from "../../store/actions/snackbarActions";

// utils
import googleBtn from "../../assets/btn_google.png";
import { Stack, Typography } from "@mui/material";
import { authRegister } from "../../apis/auth/authRegister";

const Register = ({ setLogin, setSnackbar }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [username, setUsername] = React.useState();

  const registerHandler = async () => {
    let res = null;
    if (email && password) {
      res = await authRegister(email, password, username);
    }
    if (res?.statusCode === 200) {
      setSnackbar(true, "Registered Successfull", "success");
      setLogin(true);
    } else {
      let message = res?.message || "Something went wrong";
      setSnackbar(true, message, "error");
    }
  };

  const login = () => {
    setLogin(true);
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
        Register
      </Typography>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
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
      <Button variant="contained" onClick={registerHandler}>
        Register
      </Button>
      <Button className="btn-auth" type="button" onClick={googleAuth}>
        <img className="btn-auth-img" src={googleBtn} alt="google sign in" />
      </Button>
      <Button onClick={login}>Already Have An Account?</Button>
    </Stack>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getSnackbarActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Register);
