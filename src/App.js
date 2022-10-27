import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/HomeScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import { auth } from "./firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./Components/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsbscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged Out
        dispatch(logout());
      }
    });

    return unsbscribe;
  }, [dispatch]);

  return (
    <div className="app">

        <BrowserRouter>
        {
        !user 
        ?
        <LoginScreen />
        :
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            exact
            path="/"
            element={ <HomeScreen />}
          />
        </Routes>
              }
      </BrowserRouter>

    </div>
  );
}

export default App
