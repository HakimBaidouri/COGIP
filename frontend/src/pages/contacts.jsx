import Datalist from "../components/datalist.jsx";

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

function Companies() {
    return (
        <div>
            <Datalist
                title={"All contacts"}
                columns={columnsLarge}
                decorationBar={true}
                hidePagination={false}
                hideSearchBar={false}
            />
        </div>
    );
}

export default Companies;
  