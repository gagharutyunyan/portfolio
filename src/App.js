import React, { Suspense } from "react";
import Loader from "./ui/loader/loader.jsx";
import PageStarter from "./components/js-page/page-starter/page-starter.jsx";
import "./App.css";

const App = () => (
  <Suspense fallback={<Loader />}>
    <PageStarter />
  </Suspense>
);

export default App;
