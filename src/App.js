import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//Pages
import AboutPage from "./pages/about";
import HotelsPage from "./pages/hotels";
import HomePage from "./pages";
import ErrorPage from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/404" component={ErrorPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/hotels" component={HotelsPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
