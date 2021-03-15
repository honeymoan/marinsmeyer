import * as React from "react"
import {Container, Navbar} from "react-bootstrap";

export default class Skeleton extends React.Component {
    render() {
        return <Container>
            <Navbar bg="light" variant="dark" className="navbar">
                <Navbar.Brand href="#home">
                    <h1>Marins & Meyer</h1>
                </Navbar.Brand>
            </Navbar>
            {this.props.children}
            <Navbar>
            </Navbar>
        </Container>
    }
}