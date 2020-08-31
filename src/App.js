import React from "react";
import "./css/App.css";
import "./css/props.css";
import "./css/uifont.css";

//screen
import Header from "./screens/Header";
import Sidebar from "./screens/Sidebar";
import HomePage from "./screens/Home";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
