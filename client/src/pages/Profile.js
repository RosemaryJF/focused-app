import React from 'react';
// import { useEffect, useState } from "react";
import { Navigate } from "react-router"
import Auth from '../utils/auth';

import ClimbMenu from '../components/ClimbMenu';
import Nav from '../components/Nav';

// Renders the users profile
const Profile = () => {
  if (!Auth.loggedIn) {
    <Navigate replace to="/"></Navigate>
  } else {
    return (
      <div className="profile" fluid="lg">
        <Nav />
        <div className="profile"
          style={{ marginLeft: "50px", marginTop: "50px", paddingTop: "50px", paddingBottom: "100px" }} >
          <p>Welcome back!</p>
          <p>
            <li>Click the '+' icon to add a day.</li>
            <li>Or view the days you've already created.</li>
          </p>
          {/* <ClimbMenu /> */}
        </div>
      </div >
    )
  };
};

export default Profile;