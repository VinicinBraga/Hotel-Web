import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
