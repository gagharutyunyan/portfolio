import React from "react";
import { NavLink } from "react-router-dom";

import "./page-changer-right-btn.css";

const PageChangeButton = ({ pageLink, buttonStyle }) => (
  <NavLink
    className={`fixed-icon ${buttonStyle ? buttonStyle : ""}`}
    rel="noopener noreferrer"
    to={pageLink}
    title="go to user version"
  >
    go to user version
  </NavLink>
);

export default PageChangeButton;
