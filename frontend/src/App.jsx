import "./assets/tailwindcss/tailwindcss.css";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Header from "./pages/header.jsx";
import Invoices from "./pages/invoices.jsx";
import Home from "./pages/home.jsx";
import Contacts from "./pages/contacts.jsx";
import Companies from "./pages/companies.jsx";


function App() {
    return (
        <Router>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/invoices" element={<Invoices/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/companies" element={<Companies/>}/>
            </Routes>
        </Router>
    );
}

export default App;
