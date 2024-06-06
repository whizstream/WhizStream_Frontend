import React from "react";

import { TextField } from "@mui/material";

const Input = ({ value, setValue, type, placeholder }) => {
  return (
    <TextField
      variant="outlined"
      label={placeholder}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type={type}
    />
  );
};

export default Input;
