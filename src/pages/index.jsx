import * as React from "react";
import IndexHero from "../components/index/index-hero";
import IndexServices from "../components/index/index-services";
import IndexSpace from "../components/index/index-space";
import IndexNumbers from "../components/index/index-numbers";
import IndexTeam from "../components/index/index-team";
import IndexContact from "../components/index/index-contact";
import "./../styles/index.sass";

export default class Index extends React.Component {
    render() {
        return <>
            <IndexHero />
            <IndexServices />
            <IndexTeam />
            <IndexSpace />
            <IndexNumbers />
            <IndexContact />
        </>
    }
}
