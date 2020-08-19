import React, { Component } from "react";
import NavBar from "./NavBar";
import LoggedInHeader from "./LoggedInHeader";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <>
        <div>{this.props.user ? <LoggedInHeader /> : <NavBar />}</div>
      </>
    );
  }
}

function mapState({ currentUser: { user } }) {
  return { user };
}

export default connect(mapState)(Header);
