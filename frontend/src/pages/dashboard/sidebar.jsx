function Sidebar(){
    <div>
        <section>
            <h2>Name Contact</h2> {/* BDD */}
            <img src="" alt="" />
        </section>

        <section>
            <nav>
                <ul>
                    <li><NavLink to="/">Dashboard</NavLink></li>
                    <li><NavLink to="/invoices" >Invoices</NavLink></li>
                    <li><NavLink to="/companies">Companies</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </nav>
        </section>

        <section> {/* btn pour se déconnecter->revenir page home */}
            <img src="" alt="" />
            <h3>Logout</h3>
        </section>
    </div>
}

export default Sidebar;