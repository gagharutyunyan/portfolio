import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = ({ data }) => (
  <nav className="menu">
    <span className="author">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gagharutyunyan"
      >
        <strong>Gagik Harutyunyan</strong>
      </a>
    </span>
    <ul className="menu-tabs">
      {data.map(({ id, menuClassName, path, name }) => {
        return (
          <li key={id}>
            <NavLink
              exact
              to={path}
              activeClassName="active"
              className={"btn " + menuClassName}
            >
              <h3>{name}</h3>
            </NavLink>
          </li>
        );
      })}
      <li>
        <NavLink className="btn html-css" to="/js-page/about-me">
          <h3>about-me.html</h3>
        </NavLink>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn github"
          href="https://github.com/gagharutyunyan"
        >
          <h3>GitHub</h3>
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
