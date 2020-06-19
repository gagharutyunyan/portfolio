<<<<<<< HEAD
import React, { Suspense } from "react";
import Loader from "./ui/loader/loader.jsx";
import PageStarter from "./components/js-page/page-starter/page-starter.jsx";
import "./App.css";

const App = () => (
  <Suspense fallback={<Loader />}>
    <PageStarter />
  </Suspense>
);
=======
import React, { Suspense } from 'react';
import Loader from './ui/loader/loader.jsx';
import PageStarter from './components/js-page/page-starter/page-starter.jsx';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <PageStarter />
      </Suspense>
    );
  }
}
>>>>>>> 7f3731dae2bd6da58025f1a02adb295f3f800266

export default App;
