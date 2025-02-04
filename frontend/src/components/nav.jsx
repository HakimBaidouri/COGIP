import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home.jsx";
import Invoices from "../pages/invoices.jsx";
import Contacts from "../pages/contacts.jsx";
import Companies from "../pages/companies.jsx";
// JUST TEST SIDEBAR
import Dashboard from "../pages/dashboard/dashboard.jsx";
import ContactsDash from "../pages/dashboard/contactsDash.jsx";
import CompaniesDash from "../pages/dashboard/companiesDash.jsx";
import InvoicesDash from "../pages/dashboard/invoicesDash.jsx";
import Sidebar from "../pages/dashboard/sidebar.jsx";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/companies" element={<Companies />} />

      {/* Nouvelles routes pour le dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contactsDash" element={<ContactsDash />} />
      <Route path="/companiesDash" element={<CompaniesDash />} />
      <Route path="/invoicesDash" element={<InvoicesDash />} />

      {/* Route pour le sidebar */}
      <Route path="/sidebar" element={<Sidebar />} />    
      </Routes>
  );
}

export default Nav;
