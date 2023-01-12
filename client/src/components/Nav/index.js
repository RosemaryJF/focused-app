import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';



function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="flex-row">
          <Button variant="outline-secondary">
            <Link to="/days">
              Days
            </Link>
          </Button>
          <Button variant="outline-secondary">
            {/* this is not using the Link component to logout the user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </Button>
        </div >
      );
    } else {
      return (
        <div className="flex-row">
          <Button variant="outline-secondary">
            <Link to="/signup">
              Signup
            </Link>
          </Button>
          <Button variant="outline-secondary">
            <Link to="/login">
              Login
            </Link>
          </Button>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 >
        <Link to="/">
          FOCUSED
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
