import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" excact element={<News pageSize={this.pageSize} category="general" />} />
          </Routes>
          <Routes>
            <Route path="/business" excact element={<News pageSize={this.pageSize} category="business" />} />
          </Routes>
          <Routes>
            <Route path="/entertainment" excact element={<News pageSize={this.pageSize} category="entertainment" />} />
          </Routes>
          <Routes>
            <Route path="/health" excact element={<News pageSize={this.pageSize} category="health" />} />
          </Routes>
          <Routes>
            <Route path="/science" excact element={<News pageSize={this.pageSize} category="science" />} />
          </Routes>
          <Routes>
            <Route path="/sports" excact element={<News pageSize={this.pageSize} category="sports" />} />
          </Routes>
          <Routes>
            <Route path="/technology" excact element={<News pageSize={this.pageSize} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
