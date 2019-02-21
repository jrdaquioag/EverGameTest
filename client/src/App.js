import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/App.css"
import home from "./pages/home";
import yourList from "./pages/yourList";
import gamePage from "./pages/gamePage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/yourList" component={yourList} />
        <Route exact path="/game" component={gamePage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default App;

