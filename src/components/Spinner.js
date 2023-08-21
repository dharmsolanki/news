import React, { Component } from "react";
import loading from "../loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <img src={loading} alt="loading" height="80px" />
      </div>
    );
  }
}