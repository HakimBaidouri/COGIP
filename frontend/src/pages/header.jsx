import { NavLink } from "react-router-dom";

function Header() {
    return (
      <header>
        <div className="w-screen p-12 flex flex-row font-cogip-roboto">

          <div className="mr-2 basis-64 justify-start">
            <h1 className="font-black">COGIP</h1>
          </div>

          <div className="basis-128">
            <nav>
              <ul className="flex flex-row gap-4 justify center">
                <li className="basis-3xs"><NavLink to="/">Home</NavLink></li>
                <li className="basis-2xs"><NavLink to="/invoices" >Invoices</NavLink></li>
                <li className="basis-xs"><NavLink to="/companies">Companies</NavLink></li>
                <li className="basis-sm"><NavLink to="/contacts">Contacts</NavLink></li>
              </ul>
            </nav>
          </div>
  
          <div className="relative right-0 flex basis-64 gap-4 justify-end">
            <a href="#">Sign up</a>
            <a href="#">Login</a>
          </div>

        </div>
      </header>
    );
  }
  
  export default Header;
  