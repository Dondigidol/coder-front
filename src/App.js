import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}

export default App;
