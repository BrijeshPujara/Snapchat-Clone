import React from "react";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Preview from "./components/Preview";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app-body">
        <Routes>
            <Route path="/chats" element={<Chats />} />
          </Routes>
        <Routes>
            <Route path="/preview" element={<Preview />} />
          </Routes>
          <Routes>
            <Route path="/" element={<WebcamCapture />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
