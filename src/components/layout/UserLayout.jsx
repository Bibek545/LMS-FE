import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import AuthRoute from "../auth/AuthRoute";
import { useSelector } from "react-redux";

const UserLayout = () => {

  const { user } = useSelector((state) => state.userInfo);

  return (
    <AuthRoute>
      {/* nav bar */}
      <Header />
  
        <div className="d-flex">
          <div className="bg-dark text-white p-3" style={{width: "200px"}}>
          <div className="p-3">
            Welcome back
            <h4>{user.fName} ({user.role})</h4>
          </div>
          <hr/>
          <SideBar></SideBar>
          </div>

            {/* main body */}
            <main className="main">
              <Outlet />
            </main>

        </div>
   
            {/* <Container fluid>
        <Row>
          <Col md={3} xl={2}className="bg-dark text-white">
          <div className="p-3">
            Welcome back
            <h4>Bibek Hamal</h4>
          </div>
          <hr/>
          <SideBar></SideBar>
          </Col>
          <Col md={9} xl={10}>
            {/* main body */}
            {/* <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      // </Container> */} 

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};

export default UserLayout;
