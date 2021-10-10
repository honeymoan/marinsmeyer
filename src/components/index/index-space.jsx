import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";
import "../../styles/index.sass";

// TODO: Fix StaticImage left side padding too small.

export default function IndexSpace() {
    return <Container className="my-5">
        <Row className="p-4 pb-0 pt-lg-5 align-items-center rounded-5 border shadow-lg">
            <Col className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 font-weight-bold">Espaço Moderno <br/> e Confortável</h1>
                <p className="lead">
                    Nosso escritório é localizado no Lozandes Business Tower, dentro do Lozandes Shopping,
                    construido para trazer o maior conforto e
                    eficiência para você.
                </p>
            </Col>
            <Col className="col-lg-4 h-100 offset-lg-1 p-0 position-relative">
                <StaticImage className="img-fluid border rounded-5 shadow-lg mb-4"
                             src="../../images/features/lozandes-shopping.jpg" alt="Lozandes Business Tower"/>
            </Col>
        </Row>
    </Container>;
}
