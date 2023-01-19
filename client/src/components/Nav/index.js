import React from "react";
import Auth from "../../utils/auth";
import { TiPlus } from 'react-icons/ti';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navbarLogo from '../../assets/images/navbar.png';

function showNavigation() {
  // If user is logged in will render add day, days and log out options
  if (Auth.loggedIn()) {
    return (
      <Navbar bg="custom-color-900-lght" sticky="top" expand="sm">
        <Navbar.Brand href="/"><img src={navbarLogo} alt="Focused Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end p-10" id="basic-navbar-nav">
          <NavDropdown title="Options" bg="custom-color-700-lght" >
            <Navbar.Text className="p-10">
              <NavDropdown.Item href="/newday">
                <TiPlus />
              </NavDropdown.Item>
              <Nav.Link href="/days" className="mr-2">
                Days
              </Nav.Link>
              <Nav.Link href="/" onClick={() => Auth.logout()}>
                {/* this is not using the Link component to logout the user and then refresh the application to the start */}
                Logout
              </Nav.Link>
            </Navbar.Text>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    // If user is NOT logged in will render sign up and login options
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

export default showNavigation;
