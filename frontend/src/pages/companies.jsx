import Datalist from "../components/datalist.jsx";

const columnsLarge = [
    {
        name: "columnName",
        id: [1, 2, 3],
        data: ["Company 1", "company 2", "company 3"]
    },
    {
        name: "columnName",
        data: ["TVA 1", "TVA 2", "TVA 3"]
    },
    {
        name: "ColumnName",
        data: ["United States", "France", "United States"]

    },
    {
        name: "ColumnName",
        data: ["Supplier", "Client", "Supplier"]
    },
    {
        name: "ColumnName",
        data: ["25/09/2020", "25/09/2020", "25/09/2020"]
    }
];

function Companies() {
    return (
        <div>
            <Datalist
                title={"All companies"}
                columns={columnsLarge}
                dataType="companies"
                decorationBar={true}
                hidePagination={false}
                hideSearchBar={false}
            />
        </div>
    );
}

export default Companies;
  