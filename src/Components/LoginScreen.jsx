import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";


const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen__gradient"></div>
      <div className="loginscreen__header">
        <div className="container">
          <Link to="/">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />
          </Link>
          <button onClick={() => setSignIn(true)}>Sign In</button>
        </div>
      </div>

      <div
        className="loginscreen__content"
        style={{
          backgroundImage:
            "url('https://preview.redd.it/zjgs096khv591.jpg?auto=webp&s=c6135026c093f19ef733cb3435fb95d67aa6f345')",
        }}
      >
        {signIn ? (
          <LoginComponent />
        ) : (
          <div className="text">
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to wathch? Ebter your email to create or restart your
              membership
            </h3>

            <div className="loginscreen_form">
              <form>
                <input
                  type="text"
                  name=""
                  placeholder="Enter Your Email Adress"
                  id=""
                />
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
