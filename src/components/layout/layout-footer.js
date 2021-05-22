import * as React from "react";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";

export default class LayoutFooter extends React.Component {
    render() {
        return <footer className="bg-light p-3">
            <div className="row">
                <div className="col-md pb-md-1 text-center">
                    <a className="m-1" href="https://www.instagram.com/marinsmeyeradv/"><FaInstagram size="24px"/></a>
                    <a href="https://www.facebook.com/marinsmeyeradv"><FaFacebookSquare size="24px"/></a>
                </div>
                <div className="col-md pb-md-1 text-center">
                    <a href="/privacidade">Política de Privacidade</a> / <a href="/avisos">Avisos Legais</a>
                </div>
                <div className="col-md text-center">
                    © 2021 Marins & Meyer Sociedade de Advogados
                </div>
            </div>
        </footer>
    }
}
