import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header.jsx";
import Nav from "./components/nav.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Footer /> 
    </Router>
  );
}
export default App;