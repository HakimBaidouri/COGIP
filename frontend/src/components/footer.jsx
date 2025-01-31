import { NavLink } from "react-router-dom";

function Footer() {
    return (
      <footer>
        <div>
          {/* Logo */}
          <h1>COGIP</h1>

          <section>
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
            <p><span>(123) 456-7890</span><span>(123) 456-7890</span></p>
            <p>Social Media</p>
          </section>
  
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/invoices" >Invoices</NavLink></li>
            <li><NavLink to="/companies">Companies</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </nav>

        <p>Copyright &copy; 2022 • COGIP Inc.</p>

        </div>
      </footer>
    );
  }
  
  export default Footer;
  