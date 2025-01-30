import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/header.jsx";

import Invoices from "./pages/invoices.jsx";
import Home from "./pages/home.jsx";
import Contacts from "./pages/contacts.jsx";
import Companies from "./pages/companies.jsx";
import ShowCompany from "./pages/showCompany.jsx";

import Footer from "./pages/footer.jsx";

function App() {
  return (
    <Router>
      <Header />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/showCompanies" element={<ShowCompany />} />
      </Routes>

      <Footer /> 
    </Router>
  );
}
export default App;
