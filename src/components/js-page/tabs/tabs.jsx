import React from "react";
import { Route } from "react-router-dom";
import "./tabs.css";

const Tabs = ({ menu }) => (
  <ul className="tabs">
    {menu.map(({ path, id, menuClassName, name }) => (
      <Route
        path={path}
        key={id}
        exact
        render={() => (
          <li className={menuClassName}>
            <h2>{name}</h2>
          </li>
        )}
      />
    ))}
  </ul>
);

export default Tabs;
