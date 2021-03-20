import * as React from "react";
import {Navbar, Nav} from "react-bootstrap";
import brand from "../../images/brand.svg";
import "../../styles/layout.sass";

export default class LayoutNavbar extends React.Component {
    render() {
        return <Navbar bg="light" variant="light" expand="lg" className="navbar">
            <Navbar.Brand href="/" className="navbar-brand-text">
                <img className="navbar-brand-svg" src={brand} width="32" height="64" alt="Marins & Meyer Logo"/>
                Marins & Meyer
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse"/>
        <Navbar.Collapse id="nav-collapse">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/servicos">Services</Nav.Link>
                <Nav.Link href="/profissionais">Professionals</Nav.Link>
                <Nav.Link href="/contato">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    }
}