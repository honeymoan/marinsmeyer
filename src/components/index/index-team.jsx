import React from "react";
import {Container} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";

export default function IndexTeam() {
    return <Container id="profissionais">
        <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center">
                <h3 className="display-4">Equipe experiente e profissional</h3>
                <p className="lead">Você pode contar com nossa equipe para te ajudar!</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-3 mb-4">
                <div className="row">
                    <div className="col-md-12">
                        <StaticImage src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                                     alt="wrapkit" className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-12 text-center">
                        <div>
                            <p className="mt-1 lead mb-0">Cleide Machado Marins</p>
                            <p>You can relay on our amazing features list and also our customer services will be great
                                experience.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="text-decoration-none d-block px-1">
                                        <FaInstagram className="mx-1" size="24"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-decoration-none d-block px-1">
                                        <FaFacebook className="mx-1" size="24"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 mb-4">
                <div className="row">
                    <div className="col-md-12">
                        <StaticImage src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                                     alt="wrapkit" className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-12 text-center">
                        <div>
                            <p className="mt-1 lead mb-0">Laura Meyer</p>
                            <p>You can relay on our amazing features list and also our customer services will be great
                                experience.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="text-decoration-none d-block px-1">
                                        <FaInstagram className="mx-1" size="24"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-decoration-none d-block px-1">
                                        <FaFacebook className="mx-1" size="24"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>;
}
