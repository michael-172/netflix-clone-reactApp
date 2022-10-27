import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "./Nav";
import { auth } from "../firebase-config";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile__Screen">
      <Nav />
      <div className="profile__Screen__body">
        <h1 style={{ marginTop: 0 }}>Edit Profile</h1>

        <div className="profilescreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profilescreen__details">
            <h2>{user?.email || "Michael@test.com"}</h2>
            <span>Plans (Current Plan: Premuim)</span>
            <span>Renewal Date: 4/3/2023</span>
          </div>
        </div>

        <div className="profilescreenPlans">
            <div className="plan">
                <div className="text">
                    <span>Netflix Standard</span>
                    <span>1080p</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="plan">
                <div className="text">
                    <span>Netflix Basic</span>
                    <span>480p</span>
                </div>
                <button>Subscribe</button>
            </div>


            <div className="plan">
                <div className="text">
                    <span>Netflix Premuim</span>
                    <span>4K + HDR</span>
                </div>
                <button className="current">Current Package</button>
            </div>

            <button className="signOut" onClick={() => {auth.signOut()}}>Sign out</button>

        </div>

      </div>
    </div>
  );
};

export default Profile;
