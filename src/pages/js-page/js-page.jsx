import React from "react";
import { Route, Switch } from "react-router-dom";
import Typed from "react-typed";
import Header from "../../components/js-page/header/header.jsx";
import ErrorPage from "../../components/js-page/error-page/error-page.jsx";
import Menu from "../../components/js-page/menu/menu.jsx";
import PageChangebButton from "../../ui/page-changer-btn/page-changer-right-btn.jsx";
import "./js-page.css";

const ReactPage = ({ data }) => (
  <>
    <Header data={data} />
    <main>
      <PageChangebButton pageLink="/html-page" buttonStyle="user" />
      <Menu data={data} />
      <div className="page">
        <div className="colums">
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
