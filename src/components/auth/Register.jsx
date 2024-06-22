import React from "react";

import Input from "../input/Input";
import Button from "@mui/material/Button";

import URL from "../../apis/url";

// utils
import googleBtn from "../../assets/btn_google.png";
import { Stack, Typography } from "@mui/material";

const Register = ({ setLogin }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [username, setUsername] = React.useState();

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
      <Button variant="contained">Register</Button>
      <Button className="btn-auth" type="button" onClick={googleAuth}>
        <img className="btn-auth-img" src={googleBtn} alt="google sign in" />
      </Button>
      <Button onClick={login}>Already Have An Account?</Button>
    </Stack>
  );
};

export default Register;
