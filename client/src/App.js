import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Footnote from "./components/Footnote";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Wall from "./components/Wall";
import Profile from "./components/Profile";

import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

//Bootstrap
import { Container } from "react-bootstrap";

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
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={Landing} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/wall" component={Wall} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Container>
        </main>
        <Footnote />
      </Router>
    </Provider>
  );
};
export default App;
