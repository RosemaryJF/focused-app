import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function SiteEntry() {

  function showSiteEntry() {
    if (Auth.loggedIn()) {
      return (
        <div id="homeSignedIn">
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div id="homeNotSignedIn">
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )
    }
  }

  return (
    { showSiteEntry }
  )
}

export default SiteEntry;