

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
import { MdSpaceDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../services/authAPI.jsx";
import { setUser } from "../../features/user/userSlice.js";
const Header = () => {

  const {user} = useSelector((state)=>state.userInfo)
  const dispatch = useDispatch()


  const handleOnLogout = () => {

        //calling api to logout from the backend
     logoutApi();

     
    //logout from frontend
     sessionStorage.removeItem("accessJWT");
     localStorage.removeItem("refreshJWT");
     dispatch(setUser({}))

 
  }
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link className="nav-link text-white" to="/"> <IoLibrarySharp /> LMS</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link"  to="/"><IoHomeOutline /> Home</Link>
            {
              user?._id ? (
                <>
             <Link className="nav-link" to="/user"> <MdSpaceDashboard /> Dashboard</Link>
            <Link className="nav-link" to="/" onClick={ handleOnLogout}> <CiLogout /> Logout </Link></>

              ) : (
                <>
                   <Link className="nav-link" to="/signup"> <PiSignInLight /> Sign Up</Link>
            <Link className="nav-link" to="/login"> <CiLogin /> Login</Link></>
              )
            }
         

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
