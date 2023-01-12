import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const linkStyle = linkStyle(Link)`
//   color: #FAF8F1;
//   text-decoration: none;
// `

function SiteEntry() {

  function showSiteEntry() {
    if (Auth.loggedIn()) {
      return (
        <div id="homeSignedIn">
          <Button variant="outline-secondary">
            <Link to="/profile">
              Profile
            </Link>
          </Button>
        </div>
      );
    } else {
      return (
        <div id="homeNotSignedIn">
          <Link to="/signup">
            <button colorScheme='#C58940' variant='outline'>Signup</button>
          </Link>
          <Link to="/login">
            <button colorScheme='#C58940' variant='outline'>Login</button>
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