import * as React from "react";
import {Container} from "react-bootstrap";
import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";

// TODO: Fix LayoutFooter not using 100% of page width.

export default class LayoutFooter extends React.Component {
    render() {
        return <Container fluid className="py-3 text-center border">
            <div className="col">
                <span>©2021 Marins & Meyer Sociedade de Advogados |</span>
                <a className="m-1" href="https://www.instagram.com/marinsmeyeradv/"><FaInstagram size="24px"/></a>
                <a href="https://www.facebook.com/marinsmeyeradv"><FaFacebookSquare size="24px"/></a>
            </div>
        </Container>
    }
}

// <div className="row">
//     <div className="col-md pb-md-1 text-center">

//     </div>
//     <div className="col-md pb-md-1 text-center">
//         <a href="/privacidade">Política de Privacidade</a> / <a href="/avisos">Avisos Legais</a>
//     </div>
//     <div className="col-md text-center">
//         © 2021 Marins & Meyer Sociedade de Advogados
//     </div>
// </div>
