import React, { useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/html-page/header/header.jsx";
import Main from "../../components/html-page/main/main.jsx";
import PageChangebButton from "../../ui/page-changer-btn/page-changer-right-btn.jsx";
import ErrorPage from "../../components/js-page/error-page/error-page.jsx";

import "./html-page.css";

const HtmlPage = () => {
  const myRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollHandler = () => {
    myRef.current.childNodes[0].firstChild.style.top = ``;

    myRef.current.childNodes[0].style.opacity =
      myRef.current.scrollWidth > 1350 ? 1 - window.pageYOffset / 1200 + "" : 1;
    myRef.current.childNodes[1].style.opacity =
      myRef.current.scrollWidth > 1050
        ? -0.5 + window.pageYOffset / 400 + ""
        : 1;
  };
  const movePointer = e => {
    const pointer = myRef.current.childNodes[0].firstChild;
    pointer.style.left =
      e.currentTarget.offsetWidth - e.pageX < 150
        ? `${e.currentTarget.offsetWidth - 150}px`
        : `${e.pageX}px`;
    pointer.style.top =
      e.currentTarget.offsetHeight - e.pageY < 150
        ? `${e.currentTarget.offsetHeight - 150}px`
        : `${e.pageY}px`;
  };

  const mouseLeave = () => {
    myRef.current.childNodes[0].firstChild.style.top = ``;
  };
  return (
    <Switch>
      <Route
        exact
        path="/html-page/"
        render={() => (
          <>
            <PageChangebButton pageLink="/js-page" buttonStyle="dev" />
            <div ref={myRef} className="html_page-wrapper">
              <Header movePointer={movePointer} mouseLeave={mouseLeave} />
              <Main />
            </div>
          </>
        )}
      />
      <Route
        path="/html-page/*"
        render={() => <ErrorPage blockStyle=" html-error-block" />}
      />
    </Switch>
  );
};

export default HtmlPage;
