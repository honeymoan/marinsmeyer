import * as React from "react";
import { Container } from "react-bootstrap";
import LayoutNavbar from "./layout-navbar";
import LayoutFooter from "./layout-footer";

export default class Layout extends React.Component {
    render() {
        return <section>
            <LayoutNavbar/>
                <Container className="page-content">
                    { this.props.children }
                </Container>
            <LayoutFooter/>
        </section>
    }
}