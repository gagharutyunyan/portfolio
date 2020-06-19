import React from "react";
import { Route, Switch } from "react-router-dom";
import Typed from "react-typed";
import Header from "../../components/js-page/header/header.jsx";
import ErrorPage from "../../components/js-page/error-page/error-page.jsx";
import Menu from "../../components/js-page/menu/menu.jsx";
<<<<<<< HEAD
import PageChangebButton from "../../ui/page-changer-btn/page-changer-right-btn.jsx";
=======
<<<<<<< HEAD
import PageChangebButton from "../../ui/page-changer-btn/page-changer-right-btn.jsx";
=======
import PageChangeButton from "../../ui/page-changer-btn/page-changer-right-btn.jsx";
>>>>>>> 7f3731dae2bd6da58025f1a02adb295f3f800266
>>>>>>> 69c61ae44730b888ce7c6dc07ef172a9606a0c59
import "./js-page.css";

const ReactPage = ({ data }) => (
  <>
    <Header data={data} />
    <main>
<<<<<<< HEAD
      <PageChangebButton pageLink="/html-page" buttonStyle="user" />
      <Menu data={data} />
      <div className="page">
        <div className="colums">
=======
<<<<<<< HEAD
      <PageChangebButton pageLink="/html-page" buttonStyle="user" />
      <Menu data={data} />
      <div className="page">
        <div className="colums">
=======
      <PageChangeButton pageLink="/html-page" buttonStyle="user" />
      <Menu data={data} />
      <div className="page">
        <div className="columns">
>>>>>>> 7f3731dae2bd6da58025f1a02adb295f3f800266
>>>>>>> 69c61ae44730b888ce7c6dc07ef172a9606a0c59
          <Switch>
            {data.map(({ id, path, content }) => (
              <Route
                key={id}
                path={path}
                exact
                render={() => (
                  <Typed key={id} strings={[content]} typeSpeed={0.1} />
                )}
              />
            ))}
            <Route path="/js-page/*" component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </main>
  </>
);

export default ReactPage;
