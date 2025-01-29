import { NavLink } from "react-router-dom";

function Header() {
    return (
      <header>
        <div>
          {/* Logo */}
          <h1>COGIP</h1>
  
          <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/invoices" >Invoices</NavLink></li>
            <li><NavLink to="/companies">Companies</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </nav>
  
          <div>
            <button>Sign up</button>
            <a href="#">Login</a>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  