import React from "react";
import { useNavigate } from "react-router";

import Input from "../input/Input";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

// utils
import colors from "../../utils/colors";

import googleBtn from "../../assets/btn_google.png";

//redux
import { connect } from "react-redux";
import { getSnackbarActions } from "../../store/actions/snackbarActions";

//apis
import URL from "../../apis/url";
import { authLogin } from "../../apis/auth/authLogin";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <p className="auth__box__right__title">Login</p>
      <div className="auth__box__right__inputs">
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
        <Button
          variant="contained"
          sx={{
            height: "35px",
            backgroundColor: colors.active,
            color: colors.primary,
            fontSize: "15px",
            "&:hover": {
              color: colors.white,
            },
          }}
          onClick={loginHandler}
        >
          Login
        </Button>

        <Button className="btn-auth" type="button" onClick={googleAuth}>
          <img className="btn-auth-img" src={googleBtn} alt="google sign in" />
        </Button>

        <Button
          onClick={register}
          sx={{
            height: "35px",
            fontSize: "15px",
            color: colors.active,
            "&:hover": {
              backgroundColor: "None",
              boxShadow: "none",
              color: colors.white,
            },
          }}
        >
          Create an account!
        </Button>
      </div>
    </motion.div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getSnackbarActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Login);
