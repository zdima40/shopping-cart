import React from "react";
import PropTypes from "prop-types";

import Sidebar from "containers/SidebarContainer";

const Layout = ({ children }) => (
  <div>
    <Sidebar />
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
