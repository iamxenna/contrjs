import React, {useContext} from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../../../Context/ContextWrapper";

export const Header = () => {

    const { userData, logout } = useContext(Context);

    return (
        <Navbar variant="dark" bg="dark">
            <Container>
                <NavbarBrand>Shop</NavbarBrand>
                <Nav>
                    <Link to="/">Home</Link>
                    {
                        userData.name && userData.role ? (
                            <div onClick={logout}><Link to="#">Logout</Link></div>
                            )
                            : (
                                <>
                                    <Link to="/registration">Sign up</Link>
                                    <Link to="/login">Sign in</Link>
                                </>
                            )
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};
