import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Footnote from "./components/Footnote";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Wall from "./components/Wall";
import Profile from "./components/Profile";

import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/wall" component={Wall} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
          <Footnote />
        </div>
      </Router>
    </Provider>
  );
};
export default App;
