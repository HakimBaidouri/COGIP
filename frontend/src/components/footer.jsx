import { NavLink } from "react-router-dom";

function Footer() {
    return (
      <footer>
        <div className="container mx-auto px-15">

          <div className="flex justify-between items-center mr-30 mb-15">
            <h1><NavLink to="/" className="text-5xl font-black border-4 border-cogip-yellow px-2 py-1 ml-15">COGIP</NavLink></h1>
            
            <div>
              <section>
                <p className="flex mb-4 gap-7">
                <img src="/index/maps.svg" alt="Location" className="" />
                <span>Square des Martyrs, 6000 Charleroi</span>
                </p>

                <p className="flex gap-6">
                  <img src="/index/phone.svg" alt="Phone" className="" />
                  <span>(123) 456-7890</span>
                  <img src="/index/fax.svg" alt="Fax" className="" />
                  <span className="ml-4">(123) 456-7890</span>
                </p>
              </section>

              <section className="flex mt-12 gap-12">
                <p>Social Media</p>
                  <div  className="flex gap-6 scale-120">
                    <img src="/index/facebook.svg" alt="Facebook" className="" />
                    <img src="/index/twitter.svg" alt="Twitter" className="" />
                    <img src="/index/linkedin.svg" alt="Linkedin" className="" />
                    <img src="/index/Youtube.svg" alt="Youtube" className="" />
                    <img src="/index/instagram.svg" alt="Insta" className="" />
                    <img src="/index/GooglePlus.svg" alt="Google+" className="" />
                    <img src="/index/Pinterest.svg" alt="Pinterest" className="" />
                    <img src="/index/RSS.svg" alt="RSS" className="" />
                  </div>
              </section>

            </div>
          </div>

          <div className="flex justify-between items-center gap-6 mb-10">
            <nav className="m-8">
              <ul className="flex justify-center uppercase gap-10 text-sm">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/invoices" >Invoices</NavLink></li>
                <li><NavLink to="/companies">Companies</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><NavLink to="#">Privacy Policy</NavLink></li>
              </ul>
            </nav>
              <p>Copyright &copy; 2022 • COGIP Inc.</p>
          </div>


        </div>
      </footer>
    );
  }
  
  export default Footer;
  