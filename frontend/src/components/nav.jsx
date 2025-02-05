import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home.jsx";
import Invoices from "../pages/invoices.jsx";
import Contacts from "../pages/contacts.jsx";
import Companies from "../pages/companies.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import Login from "../pages/dashboard/loginDash.jsx";
import Register from "../pages/dashboard/registerDash.jsx";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loginDash" element={<Login />} />
      <Route path="/registerDash" element={<Register />} />
    </Routes>
  );
}

export default Nav;
