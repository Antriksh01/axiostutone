import React from "react";
import "./App.css";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  return (
    <>
      <Router>
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
          <div>
            <Routes>
              <Route exact path="/" element={<Create />} />
              <Route exact path="/read" element={<Read />} />
              <Route path="/update" element={<Update />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
