import "./App.css";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [progress,setProgress] = useState(0);

  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API;

  // setProgress = (progress) => {
  //   setState({progress : progress})
  // }

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Routes>
            <Route
              path="/"
              excact
              element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="general" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/business"
              excact
              element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="business" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/entertainment"
              excact
              element={
                <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="entertainment" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/health"
              excact
              element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="health" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/science"
              excact
              element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="science" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/sports"
              excact
              element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="sports" />}
            />
          </Routes>
          <Routes>
            <Route
              path="/technology"
              excact
              element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;