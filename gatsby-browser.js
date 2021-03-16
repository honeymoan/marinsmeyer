const React = require("react");
const Layout = require("./src/components/layout/layout").default;
require("./src/global.sass");

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}