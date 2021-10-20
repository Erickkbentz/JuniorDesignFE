import React from "react";
import Link from 'next/link'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
  } from 'react-bootstrap';


class MainNavbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Navbar sticky="top" variant="dark" expand="lg" className="navbar-global">
            <Link href="/" passHref>
              <Navbar.Brand href="#home">GTRI</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href="/job-list-page" passHref>
                  <Nav.Link>Jobs</Nav.Link>
                </Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="/api/auth/logout">Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }


export default MainNavbar;  