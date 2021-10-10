import * as React from "react";
import {FaCopy} from "@react-icons/all-files/fa/FaCopy";
import {FaThumbsUp} from "@react-icons/all-files/fa/FaThumbsUp";
import {FaBriefcase} from "@react-icons/all-files/fa/FaBriefcase";
import {Container} from "react-bootstrap";

export default function IndexNumbers() {
    return <Container fluid className="py-5 px-5 text-center">
        <div className="row">
            <div className="col">
                <FaCopy className="m-1" size="40"/>
                <div className="text-center">
                    <span className="display-4">2147</span>
                    <p className="m-1 lead">Projetos Concluidos</p>
                </div>
            </div>
            <div className="col">
                <FaThumbsUp className="m-1" size="40"/>
                <div className="text-center">
                    <span className="display-4">2147</span>
                    <p className="m-1 lead">Clientes Satisfeitos</p>
                </div>
            </div>
            <div className="col">
                <FaBriefcase className="m-1" size="40"/>
                <div className="text-center">
                    <span className="display-4">4</span>
                    <p className="m-1 lead">Anos de Experiência</p>
                </div>
            </div>
        </div>
    </Container>;
}
