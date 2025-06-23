

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

// icons
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { PiSignInLight } from "react-icons/pi";
import { IoLibrarySharp } from "react-icons/io5";
const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link className="nav-link text-white" to="/"> <IoLibrarySharp /> LMS</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link"  to="/"><IoHomeOutline /> Home</Link>
            <Link className="nav-link" to="/signup"> <PiSignInLight /> Sign Up</Link>
            <Link className="nav-link" to="/login"> <CiLogin /> Log In</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
