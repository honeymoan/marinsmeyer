import * as React from "react";
import SNavbar from "./snavbar";
import "../styles/skeleton.sass";

export default class Skeleton extends React.Component {
    render() {
        return <div>
            <SNavbar/>
            {this.props.children}
        </div>
    }
}