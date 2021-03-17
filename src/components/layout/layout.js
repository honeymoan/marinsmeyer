import * as React from "react";
import LayoutNavbar from "./layout-navbar";
import LayoutFooter from "./layout-footer";

export default class Layout extends React.Component {
    render() {
        return <section>
            <LayoutNavbar/>
            {this.props.children}
            <LayoutFooter/>
        </section>
    }
}