import * as React from "react";
import {Navbar, Nav} from "react-bootstrap";
import brand from "../../images/branding/brand.svg";
import "../../styles/layout.sass";

export default class LayoutNavbar extends React.Component {
    render() {
        return <Navbar variant="light" expand="lg" className="navbar">
            <Navbar.Brand href="/" className="navbar-brand-text">
                <img className="navbar-brand-svg" src={brand} width="32" height="64" alt="Marins & Meyer Logo"/>
                Marins & Meyer
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse"/>
        <Navbar.Collapse id="nav-collapse">
            <Nav className="ml-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="#servicos">Serviços</Nav.Link>
                <Nav.Link href="#profissionais">Professionais</Nav.Link>
                <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    }
}
