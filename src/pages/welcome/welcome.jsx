import React from "react";
import AuthorNameAnimation from "../../ui/author-name-animation/author-name-animation";
import LinksBlock from "../../components/html-page/links-block/links-block.jsx";

import "./welcome.css";

const Welcome = () => (
  <div className="welcome-wrapper">
    <AuthorNameAnimation />
    <LinksBlock />
  </div>
);

export default Welcome;
