import React, { Component } from "react";
import hero from "../public/images/hero-a.svg";

export default class Home extends Component {
  render() {
    return (
      <section className="header_bg-color">
        <div className="hero-container header-flex hero-padding-top text-white">
          <div className="hero-margin-right">
            <h1 className="hero-header">
              Trello lets you work more collaboratively and get more done.
            </h1>
            <p className="hero-lead">
              Trello’s boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible, and rewarding way.
            </p>
          </div>
          <div>
            <img src={hero} alt="Loading.." />
          </div>
        </div>
        <div className="quick-signup hero-container">
          <input type="email" placeholder="Email" className="hero-input" />
          <button className="hero-btn">Sign Up-It's Free!</button>
        </div>
      </section>
    );
  }
}
