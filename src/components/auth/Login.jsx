import React from "react";

import Input from "./input/Input";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

// utils
import colors from "../../utils/colors";

const Login = ({ setLogin }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const register = () => {
    setLogin(false);
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
        >
          Login
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

export default Login;
