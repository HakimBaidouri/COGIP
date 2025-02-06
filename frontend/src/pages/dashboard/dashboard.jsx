import Datalist from "../../components/datalist.jsx";

let nbre_invoices = 235
let nbre_contacts = 156
let nbre_companies = 987


const columnsCompanies = [
    {

        name: "Name",
        id: Array.from({length: 100}, (_, i) => i + 1),
        data: Array.from({length: 100}, (_, i) => `Company ${i + 1}`)
    },
    {
        name: "VAT",
        data: Array.from({length: 100}, (_, i) => `VAT${i + 100000000}`)
    },
    {
        name: "Country",
        data: Array.from({length: 100}, (_, i) => {
            const countries = ["France", "Germany", "Spain", "Italy", "UK", "USA", "Canada", "Australia", "Netherlands", "Belgium"];
            return countries[i % countries.length];
        })
    },
    {
        name: "Type",
        data: Array.from({length: 100}, (_, i) => `Type ${i % 3 + 1}`)
    },
    {
        name: "Status",
        data: Array.from({length: 100}, (_, i) => (i % 2 === 0 ? "Active" : "Inactive"))
    }
];
const columnsContacts = [
    {

        name: "Name",
        id: Array.from({length: 100}, (_, i) => i + 1),
        data: Array.from({length: 100}, (_, i) => `Contact ${i + 1}`)
    },
    {
        name: "VAT",
        data: Array.from({length: 100}, (_, i) => `VAT${i + 100000000}`)
    },
    {
        name: "Country",
        data: Array.from({length: 100}, (_, i) => {
            const countries = ["France", "Germany", "Spain", "Italy", "UK", "USA", "Canada", "Australia", "Netherlands", "Belgium"];
            return countries[i % countries.length];
        })
    },
    {
        name: "Type",
        data: Array.from({length: 100}, (_, i) => `Type ${i % 3 + 1}`)
    },
    {
        name: "Status",
        data: Array.from({length: 100}, (_, i) => (i % 2 === 0 ? "Active" : "Inactive"))
    }
];
const columnsInvoices = [
    {

        name: "Name",
        id: Array.from({length: 100}, (_, i) => i + 1),
        data: Array.from({length: 100}, (_, i) => `Invoice ${i + 1}`)
    },
    {
        name: "VAT",
        data: Array.from({length: 100}, (_, i) => `VAT${i + 100000000}`)
    },
    {
        name: "Country",
        data: Array.from({length: 100}, (_, i) => {
            const countries = ["France", "Germany", "Spain", "Italy", "UK", "USA", "Canada", "Australia", "Netherlands", "Belgium"];
            return countries[i % countries.length];
        })
    },
    {
        name: "Type",
        data: Array.from({length: 100}, (_, i) => `Type ${i % 3 + 1}`)
    },
    {
        name: "Status",
        data: Array.from({length: 100}, (_, i) => (i % 2 === 0 ? "Active" : "Inactive"))
    }
];

function Dashboard() {
    return (
        <div className="grid grid-cols-2 gap-10 p-8 bg-indigo-100">

            <section className="flex-wrap w-full h-[232px] bg-zinc-50 rounded-lg row-span-1"> {/* BDD pour chiffre */}

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
            <Datalist
                title={"last invoices"}
                columns={columnsInvoices}
                dataType={"invoices"}
                adminMode={true}
            />

            {/* Invoices BDD*/}
            <Datalist
                title={"last contacts"}
                columns={columnsContacts}
                dataType={"contacts"}
                adminMode={true}
            />

            {/* Companies BDD */}
            <Datalist
                title={"last companies"}
                columns={columnsCompanies}
                dataType={"companies"}
                adminMode={true}
            />

        </div>
    );
}

export default Dashboard;