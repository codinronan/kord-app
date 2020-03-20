import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Player from "./components/player";
import Library from "./components/library-page";
import Search from "./components/search-page";
import NavHistory from "./components/nav-history";

const App = () => (
  <BrowserRouter>
    <NavHistory />
    <Route path="/app">
      <Route component={Header} />
      <Player />
      <main className="content">
        <Switch>
          <Route exact path="/app/search" component={Search} />
          <Route path="/app/library" component={Library} />
        </Switch>
      </main>
      <Route component={Footer} />
    </Route>
  </BrowserRouter>
);

export default App;
