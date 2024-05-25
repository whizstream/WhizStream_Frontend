import React from 'react'

//style
import "../styles/auth.scss";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';


//components

const Auth = () => {
  const [login, setLogin] = React.useState(true);
  return (
    <div className='auth'>
      <div className="auth__box">
        <div className="auth__box__left">
          <p>WS</p>
          <p>Welcome to WhizStream</p>
        </div>
        <div className="auth__box__right">
            {
              login ? <Login setLogin={setLogin}/> : <Register setLogin={setLogin}/>
            }
        </div>
      </div>
    </div>
  )
}

export default Auth