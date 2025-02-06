import Datalist from "../components/datalist.jsx";

const columns = [
    {name: "Name", data: ["Company A", "Company B", "Company C"]},
    {name: "VAT", data: ["123456789", "987654321", "456789123"]},
    {name: "Country", data: ["France", "Germany", "Spain"]},
    {name: "Type", data: ["Type A", "Type B", "Type C"]}
];

const columnsLarge = [
    {name: "Name", data: Array.from({length: 100}, (_, i) => `Company ${i + 1}`)},
    {name: "VAT", data: Array.from({length: 100}, (_, i) => `VAT${i + 100000000}`)},
    {
        name: "Country", data: Array.from({length: 100}, (_, i) => {
            const countries = ["France", "Germany", "Spain", "Italy", "UK", "USA", "Canada", "Australia", "Netherlands", "Belgium"];
            return countries[i % countries.length];
        })
    },
    {name: "Type", data: Array.from({length: 100}, (_, i) => `Type ${i % 3 + 1}`)},
    {name: "Status", data: Array.from({length: 100}, (_, i) => (i % 2 === 0 ? "Active" : "Inactive"))}
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
    {
        name: "Type",
        data: ["Type A", "Type B", "Type C", "Type A", "Type B", "Type C", "Type A", "Type B", "Type C", "Type A"]
    },
    {name: "Year Founded", data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009]},
    {name: "Employees", data: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
];

function Home() {
    return (
        <div className="w-screen overflow-hidden">

            <Datalist
                title={"last invoices"}
                columns={columns}
            />

            <div className="relative">
                <img src="/index/notepad.png" alt="" className="absolute right-0"/>
            </div>

            <Datalist
                title={"last contacts"}
                columns={columnsLarge}
            />

            <div className="relative">
                <img src="/index/bulb.png" alt="" className="absolute left-0"/>
            </div>

            <Datalist
                title={"last companies"}
                columns={columnsSmall}
            />

            <section
                className="h-[550px] w-screen relative overflow-hidden">

                <div className="p-30 flex items-center font-black leading-[78] font-cogip-inter align-middle">
                    <div className=" flex-1 text-7xl uppercase">work better in your company
                    </div>
                    <div className="flex-2 flex align-middle items-center justify-center">
                        <img src="/index/index_illustration_2.png" className=" h-[384px] w-auto" alt="phone">
                        </img>
                    </div>

                    <div
                        className="absolute bottom-[-400px] right-0 w-[1200px] h-[700px] bg-cogip-yellow  transform rotate-[16deg] z-[-10]">

                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;
