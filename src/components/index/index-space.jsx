import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";
import IndexMaps from "./index-maps";
import "../../styles/index.sass";

// TODO: Fix StaticImage left side padding too small.

export default function IndexSpace() {
    return <Container className="my-3 p-5 rounded-5 border shadow-sm">
        <Row className="justify-content-center align-content-center">
            <Col className="col">
                <h1 className="display-4 font-weight-bold">Espaço Moderno <br/> e Confortável</h1>
                <p className="lead">
                    Nosso escritório é localizado no Lozandes Business Tower, dentro do Lozandes Shopping,
                    construido para trazer o maior conforto e
                    eficiência para você.
                </p>
            </Col>
            <Col className="col offset-lg-1">
                <StaticImage className="img-fluid border rounded-5 shadow-sm mb-4"
                             src="../../images/features/lozandes-shopping.jpg" alt="Lozandes Business Tower"/>
            </Col>
        </Row>
        <Row className="pt-2 justify-content-center">
            <IndexMaps className="rounded-5 shadow-sm border" styles={{height: "400px", width: "800px"}} />
        </Row>
    </Container>;
}
