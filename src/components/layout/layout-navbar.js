import * as React from "react";
import {Navbar, Nav} from "react-bootstrap";
import brand from "../../images/brand.svg";
import "../../styles/layout.sass";

export default class LayoutNavbar extends React.Component {
    // TODO : make navlink change based on page
    // TODO: maybe create routing for other pages? that will lessen the skeleton usage
    render() {
        return <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="#home" className="snavbar-brand-text">
                <img className="snavbar-brand-svg" src={brand} width="32" height="64" alt="Marins & Meyer Logo"/>
                Marins & Meyer
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse"/>
        <Navbar.Collapse id="nav-collapse">
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Professionals</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    }
}