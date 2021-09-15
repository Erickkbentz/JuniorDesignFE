import { AmplifySignOut } from "@aws-amplify/ui-react";
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
        <Navbar sticky="top" variant="dark" expand="lg" style={{width:1500, backgroundColor:"mediumpurple ", margin:0}}>
          <Container>
            <Navbar.Brand href="#home">GTRI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>
                  <Link href="/job-list-page">
                    <a>Jobs</a>
                  </Link>
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              <AmplifySignOut/>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      );
    }
  }


export default MainNavbar;  