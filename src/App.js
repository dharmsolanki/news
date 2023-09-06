import "./App.css";
import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              excact
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="general" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/business"
              excact
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="business" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/entertainment"
              excact
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="entertainment" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/health"
              excact
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="health" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/science"
              excact
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="science" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/sports"
              excact
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="sports" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/technology"
              excact
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
