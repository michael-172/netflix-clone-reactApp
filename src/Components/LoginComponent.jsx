import React, { useRef } from "react";
import Swal from 'sweetalert2'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useState } from "react";

const LoginComponent = () => {
  const [RegisterEmail, setRegisterEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [signUp, setSignUp] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        RegisterEmail,
        RegisterPassword
      );
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        LoginEmail,
        LoginPassword
      );
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    }
  };

  return (
    <div className="login__component">
      {!signUp ? (
        <form>
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Enter Your Email Adress"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <span className="isnewMember">
            New to netflix?{" "}
            <span
              className="signupNow"
              onClick={() => {
                setSignUp(true);
              }}
              style={{ cursor: "pointer" }}
            >
              Sign up Now
            </span>
          </span>
          <span className="last">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="">Learn more.</a>{" "}
          </span>
        </form>
      ) : (
        <form>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Enter Your Email Adress"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={register}>
            Sign Up
          </button>
          <span className="isnewMember">
            Already A Member?{" "}
            <span
              className="signupNow"
              onClick={() => {
                setSignUp(false);
              }}
              style={{ cursor: "pointer" }}
            >
              Sign in
            </span>
          </span>
          <span className="last">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="">Learn more.</a>{" "}
          </span>
        </form>
      )}
    </div>
  );
};

export default LoginComponent;
