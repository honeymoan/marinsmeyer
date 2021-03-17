import * as React from "react";

export default class LayoutFooter extends React.Component {
    render() {
        return <footer className="bg-light text-center">
            <div className="row">
                <div className="col">
                    icons
                </div>
                <div className="col">
                    Privacy Policy / Disclaimers
                </div>
                
                <div className="col">
                    © 2021 Marins & Meyer Sociedade de Advogados
                </div>
            </div>
        </footer>
    }
}