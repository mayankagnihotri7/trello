import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import "@material-ui/styles";
import "../scss/index.scss";
import { getCurrentUser, noToken } from "../actions/index";

import Register from "../components/Register";
import Home from "../components/Home";
import Error from "../components/Error";
import Login from "../components/Login";
import Boards from "../components/Boards";
import Header from "../components/Header";

class App extends Component {
  state = {
    token: "",
  };

  componentDidMount() {
    var token = localStorage.getItem("authToken") || "";
    if (token) {
      this.setState({ token: token });
      this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/boards" component={Boards} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
  };
};

export default connect(mapStateToProps)(App);
