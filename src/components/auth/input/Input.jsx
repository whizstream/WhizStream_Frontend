import React from "react";

import "../../../styles/components/input.scss";

const Input = ({ value, setValue, type, placeholder }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type={type}
      className="custom__input"
    />
  );
};

export default Input;
