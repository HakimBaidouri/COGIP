import { NavLink } from "react-router-dom";
import HeaderDash from "./headerDash.jsx";


function Sidebar() {
    const name = "Henry George"; //changer avec id BDD

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md flex flex-col justify-between p-6">
        {/* Profil - BDD connexion */}
        <div className="text-center font-cogip-roboto">
          <img
            src="/path-to-image.jpg" 
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="mt-2 font-bold text-lg">{name}</h2>
        </div>

        {/* Navigation */}
        <nav className="font-cogip-inter mt-6">
          <ul className="space-y-4">
            <li>
              <NavLink to="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img src="/index/dashboard/dashboard.svg" alt="Dashboard" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/invoicesDash" className="flex items-center gap-2 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img src="/index/dashboard/invoicesDash.svg" alt="Invoices" />
                <span>Invoices</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/companiesDash" className="flex items-center gap-2 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img src="/index/dashboard/companiesDash.svg" alt="Companies" />
                <span>Companies</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactsDash" className="flex items-center gap-2 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img src="/index/dashboard/contactDash.svg" alt="Contacts" />
                <span>Contacts</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Logout - BDD */}
        <div className="flex items-center justify-between border-t border-gray-300 pt-3 font-cogip-inter">
          <img
            src="/path-to-image.jpg" 
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <NavLink to="/" className="flex items-center gap-2 text-cogip-blue hover:text-black">
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
      <HeaderDash/>
    </div>
  );
}

export default Sidebar;
