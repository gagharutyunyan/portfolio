import React from "react";
import { NavLink } from "react-router-dom";

import "./links-block.css";

const LinksBlock = () => (
  <div className="pages">
    <NavLink className="link-container-url" to="/js-page">
      <div className="link-container js-page">
        <div className="content">
          <h2>Developer-mode</h2>
          <p>Look at this portfolio with my eyes</p>
        </div>
      </div>
    </NavLink>
    <NavLink className="link-container-url" to="/html-page">
      <div className="link-container user-page">
        <div className="content">
          <h2>User-mode</h2>
          <p>Look at this portfolio with simple user eyes</p>
        </div>
      </div>
    </NavLink>
  </div>
);

export default LinksBlock;
