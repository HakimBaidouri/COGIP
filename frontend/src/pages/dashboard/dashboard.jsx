let nbre_invoices = 235
let nbre_contacts = 156
let nbre_companies = 987

function Dashboard() {
    return (
        <div className="grid grid-cols-2 gap-10 p-8">

            <section className="flex-wrap w-full h-[232px] bg-zinc-50 rounded-lg"> {/* BDD pour chiffre */}

                <h2 className="w-full p-[30px] font-bold text-xl">Statistics</h2>

                <div className="flex justify-around items-center">

                    <div
                        className="flex-wrap w-[85px] h-[85px] bg-indigo-700 rounded-full text-white text-center font-bold py-3">
                        <span className="flex-1/1">{nbre_invoices}</span> <span
                        className="flex-1/1">Invoices</span>
                    </div>

                    <div
                        className="flex-wrap w-[85px] h-[85px] bg-indigo-400 rounded-full text-white text-center font-bold py-3">
                        <span className="flex-1/1">{nbre_contacts}</span> <span
                        className="flex-1/1">Contacts</span>
                    </div>

                    <div
                        className="flex-wrap w-[85px] h-[85px] bg-rose-400 rounded-full text-white text-center font-bold py-3">
                        <span className="flex-1/1">{nbre_companies}</span> <span
                        className="flex-1/1">Companies</span>
                    </div>

                </div>


            </section>

            {/* Contacts BDD*/}
            {/* devrait être converti en module */}
            <section className="flex-wrap w-full h-[400px] bg-zinc-50 rounded-lg">

                <h2 className="w-full p-[30px] font-bold text-xl">Last Invoices</h2>
                <hr className="relative left-[30px] w-9/10"/>

                {/*TODO : Datalist admin here*/}
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Name X</td>
                        <td>Nbr X</td>
                        <td>Xmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            {/* Invoices BDD*/}
            <section>
                <p>Last Invoices</p>
                <table>
                    <thead>
                    <tr>
                        <th>Invoice number</th>
                        <th>Dates</th>
                        <th>Company</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>nbr X</td>
                        <td>date X</td>
                        <td>Compani X</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            {/* Companies BDD */}
            <section>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>TVA</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>name X</td>
                        <td>tva X</td>
                        <td>country X</td>
                    </tr>
                    </tbody>
                </table>
            </section>

        </div>
    );
}

export default Dashboard;