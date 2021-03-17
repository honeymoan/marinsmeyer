import * as React from "react";
import Layout from "./src/components/layout/layout";
import "./src/global.sass";

export const wrapPageElement = ({ element, props }) => {
    return (<Layout {...props}>{ element }</Layout>);
}