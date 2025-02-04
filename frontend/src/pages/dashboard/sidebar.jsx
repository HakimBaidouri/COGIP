import { NavLink } from "react-router-dom";

function Sidebar() {
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
          <h2 className="mt-2 font-bold text-lg">Henry George</h2>
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

      {/* CONTENU PRINCIPAL */}
      <div className="flex-1 p-8 bg-indigo-100 relative">
        <h3 className="text-2xl font-bold">Dashboard</h3>
        <p className="text-gray-500">dashboard/</p>

        <section className="m-8 bg-cogip-blue text-white rounded-lg p-15 relative">
        <img 
            src="/index/dashboard/work.svg" 
            alt="Illustration"
            className="absolute top-[-150px] scale-90 right-50"
          />
          <h2 className="text-4xl font-bold">Welcome back, {name}!</h2>
          <p className="text-base">You can add an invoice, a company <br />
            and some contacts.</p>
          </section>
      </div>
    </div>
  );
}

export default Sidebar;
