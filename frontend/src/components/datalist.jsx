export default function Datalist({table_name, nbre_rows, column1, column2, column3, column4}) {
    return (<section className="p-30 flex">
        <div className="datalist">

            <h2 className="font-black font-cogip-inter text-5xl capitalize pb-20">{table_name}</h2>

            <table className="w-[1200px]">

                <Columns column1={column1} column2={column2} column3={column3} column4={column4}/>
                <Rows nbre_rows={nbre_rows}/>

            </table>
        </div>
    </section>);
}

function Columns({column1, column2, column3, column4}) {
    return (
        <tr className=" w-[100%] p-2 justify-between font-cogip-roboto bg-cogip-yellow text-center">
            <th>{column1}</th>
            <th>{column2}</th>
            <th>{column3}</th>
            <th>{column4}</th>
        </tr>
    );

}

function Rows({nbre_rows}) {

    let rows = [];

    for (let i = 0; i < nbre_rows; i++) {

        const backgroundColor = i % 2 === 0 ? "bg-white" : "bg-gray-100";

        rows.push(
            <tr className={`w-[100%] justify-between font-cogip-roboto ${backgroundColor}`}>
                <td key={i}>
                    This is a test : {i + 1}
                </td>
                <td key={i}>
                    This is a test : {i + 1}
                </td>
                <td key={i}>
                    This is a test : {i + 1}
                </td>
                <td key={i}>
                    This is a test : {i + 1}
                </td>
            </tr>
        );
    }
    return rows;
}