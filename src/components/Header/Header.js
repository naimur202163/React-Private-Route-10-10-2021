import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import FirebasUser from './../../hooks/userFirebase';
const Header = () => {
    const { user,loginOut}=FirebasUser()
  return (
    <div className="container">
      <Link to="/home">Home</Link>
      <Link to="/registar">Registar</Link>
      {/* <Link to="/login">login</Link> */}
      <Link to="/about">About</Link>
        {
            user.email? <button onClick={loginOut}>LogOut</button>: <Link to="/login">LOgin</Link>
        }
    </div>
  );
};




export default Header;
