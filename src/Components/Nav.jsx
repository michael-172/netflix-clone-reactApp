import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./all.scss";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_scrolled"}`}>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />
          </div>
        </Link>
        <Link to="/profile" style={{ cursor: "pointer" }}>
          <div className="avatar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
