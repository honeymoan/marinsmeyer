import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Container, Row, Col} from "react-bootstrap";
import Tilty from 'react-tilty';
import "./../styles/index.sass";

export default class Index extends React.Component {
    render() {
        return <>
            <Container className="col-xxl-8 px-4 py-1">
                <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <Col className="col-10 col-sm-8 col-lg-6">
                        <StaticImage className="d-block mx-lg-auto img-fluid" src="../images/hero-image.png"
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
            </Container>
            <Container fluid className="py-5 px-5 shadow-lg feature-block-1">
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
                            <StaticImage src="../images/features/direito-criminal.jpg"
                                         alt="Direito Criminal e Execução Penal" className="feat-image"/>
                            <div className="d-flex flex-column h-100 p-5 text-shadow-1 feat-title">
                                <h2 className="font-weight-bold">Direito Criminal e Execução Penal</h2>
                            </div>
                        </div>
                    </Tilty>
                    <Tilty max="10">
                        <div className="card card-cover rounded-5 h-100 overflow-hidden text-white bg-light shadow-lg">
                            <StaticImage src="../images/features/direito-do-consumidor.jpg"
                                         alt="Direito Cível e Direito do Consumidor" className="feat-image"/>
                            <div className="d-flex flex-column h-100 p-5 text-shadow-1 feat-title">
                                <h2 className="font-weight-bold">Direito <br/> Cível <br/> e Direito do Consumidor</h2>
                            </div>
                        </div>
                    </Tilty>
                    <Tilty max="10">
                        <div className="card card-cover rounded-5 h-100 overflow-hidden text-white bg-light shadow-lg">
                            <StaticImage src="../images/features/direito-da-familia.jpg"
                                         alt="Direito da Família e Direito do Trabalho" className="feat-image"/>
                            <div className="d-flex flex-column h-100 p-5 text-shadow-1 feat-title">
                                <h2 className="font-weight-bold">Direito <br/> da Família <br/> e Direito do Trabalho
                                </h2>
                            </div>
                        </div>
                    </Tilty>
                </Row>
            </Container>
            <Container className="my-5">
                <Row className="p-4 pb-0 pt-lg-5 align-items-center rounded-5 border shadow-lg">
                    <Col className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 font-weight-bold">Espaço Moderno <br/> e Confortável</h1>
                        <p className="lead">
                            Nosso escritório é localizado no Lozandes Business Tower, dentro do Lozandes Shopping,
                            construido para trazer o maior conforto e
                            eficiência para você.
                        </p>
                    </Col>
                    <Col className="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
                        <div className="">
                            <StaticImage className="img-fluid border rounded-5 shadow-lg mb-4"
                                         src="../images/features/lozandes-shopping.jpg" alt="Lozandes Business Tower"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="px-4 my-5 text-center">
                <h1 className="font-weight-bold">Espaço Moderno e Confortável</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Nosso escritório é localizado no Lozandes Business Tower, dentro do Lozandes Shopping,
                        construido para trazer o maior conforto e
                        eficiência para você.
                    </p>
                </div>
                <Tilty max="5">
                    <Container className="px-5">
                        <StaticImage className="img-fluid border rounded-5 shadow-lg mb-4"
                                     src="../images/features/lozandes-shopping.jpg" alt="Lozandes Business Tower"/>
                    </Container>
                </Tilty>
            </Container>
            <Container fluid className="py-5 px-5 shadow-lg feature-block-2">

            </Container>
        </>
    }
}

/*Espaço Moderno e Confortável
Nosso escritório é localizado no Lozandes Business Tower, dentro do Lozandes Shopping,
    construido para trazer o maior conforto e
eficiência para você.*/
