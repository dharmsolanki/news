import React from "react";
import loading from "../loading.gif";

const Spinner = () => {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <img src={loading} alt="loading" height="80px" />
      </div>
    );
}

export default Spinner;