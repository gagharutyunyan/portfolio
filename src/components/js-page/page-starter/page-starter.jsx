import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../error-page/error-page.jsx';
import Welcome from '../../../pages/welcome/welcome.jsx';
import JsPage from '../../../pages/js-page/js-page.jsx';
import AboutPage from '../about-page/about-page.jsx';
import HtmlPage from '../../../pages/html-page/html-page.jsx';

import { fetchReactPageData } from '../fake-api/fakeApi';

const resource = fetchReactPageData();
const PageStarter = () => {
    const reactPageData = resource.reactPageData.read();
    return (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/html-page" component={HtmlPage} />
            <Route exact path="/js-page/about-me" component={AboutPage} />
            <Route
                path="/js-page"
                render={() => <JsPage data={reactPageData.jsPageBlanks} />}
            />
            <Route
                render={() => <ErrorPage blockStyle=" html-error-block" />}
            />
        </Switch>
    );
};

export default PageStarter;
