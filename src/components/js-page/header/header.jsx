import React from "react";
import Tabs from "../tabs/tabs.jsx";
import "./header.css";
import Logo from "../logo/logo.jsx";

const Header = ({ data }) => (
  <header className="header">
    <Logo />
    <Tabs menu={data} />
  </header>
);

export default Header;
