import Datalist from "../../components/datalist.jsx";

let nbre_invoices = 235
let nbre_contacts = 156
let nbre_companies = 987


const columns = [
    {name: "Name", data: ["Company A", "Company B", "Company C", "Company D", "Company E"]},
    {name: "VAT", data: ["123456789", "987654321", "456789123", "486651847", "89471948"]},
    {name: "Country", data: ["France", "Germany", "Spain", "Italy", "Belgium"]},
    {name: "Type", data: ["Type A", "Type B", "Type C", "Type D", "Type E"]}
];
const columnsLarge = [
    {name: "Name", data: Array.from({length: 100}, (_, i) => `Company ${i + 1}`)},
    {name: "VAT", data: Array.from({length: 100}, (_, i) => `VAT${i + 100000000}`)},
    {
        name: "Country", data: Array.from({length: 100}, (_, i) => {
            const countries = ["France", "Germany", "Spain", "Italy", "UK", "USA", "Canada", "Australia", "Netherlands", "Belgium"];
            return countries[i % countries.length];
        })
    }
];
const columnsSmall = [
    {
        name: "Name",
        data: ["Company A", "Company B", "Company C", "Company D", "Company E", "Company F", "Company G", "Company H", "Company I", "Company J"]
    },
    {
        name: "VAT",
        data: ["123456789", "987654321", "456789123", "321654987", "654321789", "789123456", "159753486", "753159852", "852963741", "963852741"]
    },
    {
        name: "Country",
        data: ["France", "Germany", "Spain", "Italy", "UK", "USA", "Canada", "Australia", "Netherlands", "Belgium"]
    },

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
                columns={columns}
                adminMode={true}
            />

            {/* Invoices BDD*/}
            <Datalist
                title={"test 1"}
                columns={columns}
                adminMode={true}
            />

            {/* Companies BDD */}
            <Datalist
                title={"sacrebleu"}
                columns={columns}
                adminMode={true}
            />

        </div>
    );
}

export default Dashboard;