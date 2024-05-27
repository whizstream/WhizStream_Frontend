import React, { useEffect } from "react";
import { useNavigate } from "react-router";

//style
import "../styles/auth.scss";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

//components

const Auth = () => {
  const [login, setLogin] = React.useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="auth">
      <div className="auth__box">
        <div className="auth__box__left">
          <p>WS</p>
          <p>Welcome to WhizStream</p>
        </div>
        <div className="auth__box__right">
          {login ? (
            <Login setLogin={setLogin} />
          ) : (
            <Register setLogin={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
