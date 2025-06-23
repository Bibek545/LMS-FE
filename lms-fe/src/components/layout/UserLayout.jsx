import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";

const UserLayout = () => {
  return (
    <div>
      {/* nav bar */}
      <Header />
      <Container fluid>
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
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
