import * as React from "react";
import LayoutNavbar from "./layout-navbar";

export default class Layout extends React.Component {
    render() {
        return <section>
            <LayoutNavbar/>
            {this.props.children}
        </section>
    }
}