import { NavLink } from "react-router-dom";

function Sidebar() {
    const firstname = "Henry"; //changer avec id BDD
    const lastname = "George"; //changer avec id BDD

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md flex flex-col justify-between p-6">
        {/* Profil - BDD connexion */}
        <div className="text-center">
          <img
            src="/path-to-image.jpg" 
            alt="Profile"
            className="w-22 h-22 rounded-full mx-auto bg-cogip-blue"
          />
          <h2 className="mt-2 font-bold font-cogip-roboto text-2xl">{firstname}<br />{lastname}</h2>
        </div>

        {/* Navigation */}
        <nav className="font-cogip-inter mt-6 ml-4 text-xl">
          <ul className="space-y-5 -translate-y-30">
            <li>
              <NavLink to="/dashboard" className="flex items-center gap-3 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img className="scale-85" src="/index/dashboard/dashboard.svg" alt="Dashboard" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/invoicesDash" className="flex items-center gap-3 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img className="scale-85" src="/index/dashboard/invoicesDash.svg" alt="Invoices" />
                <span>Invoices</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/companiesDash" className="flex items-center gap-3 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img className="scale-85" src="/index/dashboard/companiesDash.svg" alt="Companies" />
                <span>Companies</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/contactsDash" className="flex items-center gap-3 text-gray-600 hover:text-black" activeClassName="text-black font-bold">
                <img className="scale-85" src="/index/dashboard/contactDash.svg" alt="Contacts" />
                <span>Contacts</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Logout - BDD */}
        <div className="flex items-center justify-between text-xl border-t border-gray-300 pt-3 font-cogip-inter">
          <img
            src="/path-to-image.jpg" 
            alt="Profile"
            className="w-10 h-10 rounded-full bg-cogip-blue"
          />
          <NavLink to="/" className="flex items-center gap-2 text-cogip-blue hover:text-black">
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
