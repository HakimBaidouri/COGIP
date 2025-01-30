import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="relative w-screen pl-30 pt-12 pb-12 flex font-cogip-roboto font-black bg-cogip-yellow">

            <div className="mr-2 basis-64 justify-self-start align-middle">
                <h1 className="font-black text-4xl">COGIP</h1>
            </div>

            <div className="flex basis-128 justify-self-center align-middle items-center">
                <nav>
                    <ul className="flex gap-4 text-xl">
                        <li className="basis-3xs"><NavLink to="/">Home</NavLink></li>
                        <li className="basis-2xs"><NavLink to="/invoices">Invoices</NavLink></li>
                        <li className="basis-xs"><NavLink to="/companies">Companies</NavLink></li>
                        <li className="basis-sm"><NavLink to="/contacts">Contacts</NavLink></li>
                    </ul>
                </nav>
            </div>

            <div
                className="absolute right-30 flex basis-64 gap-4 justify-self-end align-middle items-center text-xl">
                <a href="#">Sign up</a>
                <a href="#">Login</a>
            </div>


        </header>
    );
}

export default Header;
  