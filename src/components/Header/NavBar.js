import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand href="/">MepɛDan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/listing">Listing</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                             <NavDropdown title="Account Options" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/rent">Rent </NavDropdown.Item>
                                <NavDropdown.Item href="/sell">
                                    Sell
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/buy">Buy</NavDropdown.Item>
                                <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                
                            </NavDropdown.Item> 
                            </NavDropdown> 
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;