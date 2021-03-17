import * as React from "react";
import {Navbar, Nav} from "react-bootstrap";
import brand from "../../images/brand.svg";
import "../../styles/layout.sass";

export default class LayoutNavbar extends React.Component {
    // TODO : make navlink change based on page
    // TODO: maybe create routing for other pages? that will lessen the skeleton usage
    render() {
        return <Navbar bg="light" variant="light" expand="lg" className="navbar">
            <Navbar.Brand href="#home" className="navbar-brand-text">
                <img className="navbar-brand-svg" src={brand} width="32" height="64" alt="Marins & Meyer Logo"/>
                Marins & Meyer
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse"/>
        <Navbar.Collapse id="nav-collapse">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="#link">Professionals</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    }
}