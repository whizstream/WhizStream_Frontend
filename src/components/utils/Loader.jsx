import React from "react";
import { Triangle } from "react-loader-spinner";
import "../../styles/loader.scss";
const Loader = () => {
  return (
    <div className="loader">
      <h1>WhizStream</h1>
      <Triangle height="500" width="500" radius="9" color="#1f62ff" />
    </div>
  );
};

export default Loader;
