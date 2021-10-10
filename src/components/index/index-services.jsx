import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Tilty from "react-tilty";
import {StaticImage} from "gatsby-plugin-image";
import "../../styles/index.sass";

export default function IndexServices() {
    return <Container id="servicos" fluid className="py-5 px-5 shadow-lg feature-block-1">
        <Row className="px-5 justify-content-center">
            <Col className="justify-content-center">
                <h2 className="text-center">Áreas de Atuação</h2>
                <p className="lead text-center">Conheça as especialidades que oferecemos e saiba como podemos te
                    ajudar.</p>
            </Col>
        </Row>
        <Row className="px-5 py-4 justify-content-between w-50 m-auto">
            <Tilty max="10">
                <div className="card card-cover rounded-5 h-100 overflow-hidden text-white shadow-lg">
                    <StaticImage src="../../images/features/direito-criminal.jpg"
                                 alt="Direito Criminal e Execução Penal" className="feat-image"/>
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 feat-title">
                        <h2 className="font-weight-bold">Direito Criminal e Execução Penal</h2>
                    </div>
                </div>
            </Tilty>
            <Tilty max="10">
                <div className="card card-cover rounded-5 h-100 overflow-hidden text-white bg-light shadow-lg">
                    <StaticImage src="../../images/features/direito-do-consumidor.jpg"
                                 alt="Direito Cível e Direito do Consumidor" className="feat-image"/>
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 feat-title">
                        <h2 className="font-weight-bold">Direito <br/> Cível <br/> e Direito do Consumidor</h2>
                    </div>
                </div>
            </Tilty>
            <Tilty max="10">
                <div className="card card-cover rounded-5 h-100 overflow-hidden text-white bg-light shadow-lg">
                    <StaticImage src="../../images/features/direito-da-familia.jpg"
                                 alt="Direito da Família e Direito do Trabalho" className="feat-image"/>
                    <div className="d-flex flex-column h-100 p-5 text-shadow-1 feat-title">
                        <h2 className="font-weight-bold">Direito <br/> da Família <br/> e Direito do Trabalho
                        </h2>
                    </div>
                </div>
            </Tilty>
        </Row>
    </Container>;
}
