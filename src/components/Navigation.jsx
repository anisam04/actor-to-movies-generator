// import logo from '../logo.png'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'


class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand href="/">
         {/* <img src={logo} width="50px" /> */}
         Actor to Movies Generator
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/"> Generate Movies </Nav.Link>
            <Nav.Link href="example"> Example </Nav.Link>
          </Nav>
        </Navbar.Collapse>
         </Navbar>
       </div>
)
}
}
export default Navigation