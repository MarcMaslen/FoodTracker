import React, { Component } from "react";
import "./about.scss";

export default class About extends Component {
  render() {
    return (
      <div className="container">
          <div className="left">
            <div className="img">
                <img src="assets/me.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h1>About Complied Health</h1>
                <h2>We aim to provide you with a centralised dashboard for all your
                  your needs. This includes your own Digital Recipe Book, Calorie Counter,
                  BMI Calculator ect.
                </h2>
            </div>
        </div>
      </div>
    );
  }
}
