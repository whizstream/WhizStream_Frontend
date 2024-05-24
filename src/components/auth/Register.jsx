import React from "react";

import Input from "./input/Input";
import Button from "@mui/material/Button";

import { motion } from "framer-motion";

// utils
import colors from "../../utils/colors";

const Register = ({ setLogin }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [username, setUsername] = React.useState();

  const login = () => {
    setLogin(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <p className="auth__box__right__title">Register</p>
      <div className="auth__box__right__inputs">
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
          Register
        </Button>
        <Button
          onClick={login}
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
          Already Have An Account?
        </Button>
      </div>
    </motion.div>
  );
};

export default Register;
