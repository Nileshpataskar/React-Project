import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function Logo() {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
  return (
    <div>
      <div className="flexdiv">
      <span className="the">THE</span>
      <Link to="/" className="sirenLink">
       
        <h1 className="siren">SIREN</h1>
        </Link>
      </div>
      </div>
      
  );
}

export default Logo;
