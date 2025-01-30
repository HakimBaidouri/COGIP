import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home.jsx";
import Invoices from "../pages/invoices.jsx";
import Contacts from "../pages/contacts.jsx";
import Companies from "../pages/companies.jsx";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/companies" element={<Companies />} />
    </Routes>
  );
}

export default Nav;
