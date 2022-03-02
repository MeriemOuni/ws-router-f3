import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
const NavBar = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/">Ws Router</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar