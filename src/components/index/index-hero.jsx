import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";

export default function IndexHero() {
    return <Container className="col-xxl-8 px-4 py-1">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
            <Col className="col-10 col-sm-8 col-lg-6">
                <StaticImage className="d-block mx-lg-auto img-fluid" src="../../images/hero-image.png"
                             alt="Advogadas Cleide Marins e Laura Meyer"/>
            </Col>
            <Col className="col-lg-6">
                <h1 className="display-4 font-weight-bold mb-3">Atendimento Especializado. Para Você.</h1>
                <p className="lead">
                    Nosso escritório tem como missão promover serviços jurídicos de alta qualidade, buscando
                    auxiliar você a alcançar seus resultados de forma eficaz e inovadora,
                    aliando à excelência técnica com à paixão pelo direito.
                </p>
            </Col>
        </Row>
    </Container>;
}
