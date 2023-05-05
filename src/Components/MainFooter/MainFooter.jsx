import React, { Component } from "react";
import "./MainFooter.scss";

export class MainFooter extends Component {
  render() {
    return (
      <div className="MainFooter">
        <div className="footerDiv flex">
          <small>ABC Travel Site</small>
          <small>&copy; Copyrights Reserverd</small>
        </div>
      </div>
    );
  }
}

export default MainFooter;
