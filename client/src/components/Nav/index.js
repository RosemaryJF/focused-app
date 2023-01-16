import React from "react";
import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function showNavigation() {
  if (Auth.loggedIn()) {
    return (
      <Navbar className="navbar-transparent" sticky="top" expand="lg">
        <Navbar.Brand href="/">FOCUSED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav.Link href="/days">
          Days
        </Nav.Link>
        <Nav.Link href="/" onClick={() => Auth.logout()}>
          {/* this is not using the Link component to logout the user and then refresh the application to the start */}
          Logout
        </Nav.Link>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="navbar-transparent" sticky="top" expand="lg">
        <Navbar.Brand href="/">FOCUSED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav.Link href="/signup">
          Signup
        </Nav.Link>
        <Nav.Link href="/login" variant="outline-secondary">
          Login
        </Nav.Link>
      </Navbar>
    );
  }
};
// return (
//   <header className="flex-row px-1">
//     <h1 >
//       <Link to="/">
//         FOCUSED
//       </Link>
//     </h1>

//     <nav>
//       {showNavigation()}
//     </nav>
//   </header>
// );


export default showNavigation;
