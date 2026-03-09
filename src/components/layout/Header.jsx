import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

// icons
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin, CiSearch } from "react-icons/ci";
import { PiSignInLight } from "react-icons/pi";
import { IoLibrarySharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { CiShoppingCart } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../services/authAPI.jsx";
import { setUser } from "../../features/user/userSlice.js";
import { Form, InputGroup } from "react-bootstrap";
import { setAllBorrows, setMyBorrows } from "../../features/borrow/borrowSlice.js";
const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { cart } = useSelector((state) => state.cartInfo);

  const dispatch = useDispatch();
  const searchRef = useRef("");
  const navigate = useNavigate();


  const handleOnLogout = () => {
    //calling api to logout from the backend
    logoutApi();

    //logout from frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
    dispatch(setMyBorrows([]));
    dispatch(setAllBorrows([]));
  };

  const handleOnSearch = (e)=> {
    e.preventDefault()
    const str = searchRef.current.value
    str && navigate("/search?query=" + str)
    // console.log(searchRef.current.value)
  };

  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link className="nav-link text-white" to="/">
          {" "}
          <IoLibrarySharp /> LMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-between flex-column flex-md-row">
            <div></div>
            <Form style={{ width: "40%" }} onSubmit={handleOnSearch}>
              <InputGroup className="">
                <Form.Control
                  placeholder="Book title"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  name="s"
                  ref={searchRef}
                  
                />
                <InputGroup.Text id="basic-addon2"
                onClick={handleOnSearch}
                as="button"
                >
                  <CiSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav className=" ">
              <Link className="nav-link" to="/">
                <IoHomeOutline /> Home
              </Link>
              <Link className="nav-link" to="/all-books">
                <ImBooks /> Books
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    {" "}
                    <MdSpaceDashboard /> Dashboard
                  </Link>
                  <Link className="nav-link" to="/" onClick={handleOnLogout}>
                    {" "}
                    <CiLogout /> Logout{" "}
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">
                    {" "}
                    <PiSignInLight /> Sign Up
                  </Link>
                  <Link className="nav-link" to="/login">
                    {" "}
                    <CiLogin /> Login
                  </Link>
                </>
              )}
              <Link to = "/cart" className="nav-link position-relative">
                <div className="cart-count position-absolute">{cart.length} </div>
                <CiShoppingCart className="fs-3"/>
              </Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
