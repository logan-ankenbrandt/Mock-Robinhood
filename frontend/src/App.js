import React from "react";
import { Route, Switch } from "react-router-dom";
import AllStocks from './pages/AllStocks';
import SingleStock from "./pages/SingleStock";
import Root from "./Root";



function App() {

  return (
    <Root>
      <Switch>
        <Route exact path="/" component={AllStocks} />
        <Route exact path="/:symbol" component={SingleStock} />
        <Route path="*">This is not the page you're looking for</Route>
      </Switch>
    </Root>
  );
}

export default App;
