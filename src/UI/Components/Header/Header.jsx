import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <Navbar variant="dark" bg="dark">
            <Container>
                <NavbarBrand>Shop</NavbarBrand>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/registration">Sign up</Link>
                    <Link to="/login">Sign in</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
