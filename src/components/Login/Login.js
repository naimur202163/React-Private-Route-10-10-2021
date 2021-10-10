import React from "react";
import { Link } from "react-router-dom";
import FirebasUser from "./../../hooks/userFirebase";
import useAuth from './../../hooks/useAuth';
const Login = () => {
  const {GoogleSign}=useAuth()
  return (
    <div>
      <h2>Wellcome To Login</h2>
      <input type="email" placeholder="Enter Your Email" />
      <br />
      <input type="password" placeholder="Enter Your PassWord" />
      <br />
      <button  onClick={GoogleSign} >Gogle Sign</button>
      <br />
      <p>
        if you Dont Have accute <Link to="/registar">Create here</Link>
      </p>
    </div>
  );
};

export default Login;
