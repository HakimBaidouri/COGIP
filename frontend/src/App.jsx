import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/header.jsx";
import Nav from "./components/nav.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
    </Router>
  );
}
export default App;