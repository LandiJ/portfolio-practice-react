import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/" component={Home} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
