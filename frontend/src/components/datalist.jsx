export default function Datalist({table, nbre_rows, columns}) {
    // S'assurer qu'il y a toujours 6 colonnes
    const completeColumns = Array.from({length: 6}, (_, index) => {
        return columns[index] || {
            name: '',
            data: Array(nbre_rows).fill('')
        }; // Remplir avec des colonnes vides si nécessaire
    });

    return (
        <section className="p-30 flex">
            <div className="datalist">
                <h2 className="font-black font-cogip-inter text-5xl capitalize pb-20">last {table}</h2>
                <table className="w-420">
                    <thead>
                    <Columns columns={completeColumns}/>
                    </thead>
                    <tbody>
                    <Rows nbre_rows={nbre_rows} columns={completeColumns}/>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function Columns({columns}) {
    return (
        <tr className="text-left font-cogip-roboto bg-cogip-yellow h-12 capitalize font-semibold">
            {columns.map((col, index) => (
                <th key={index} className={index === 0 ? "pl-8 w-1/6" : "w-1/6"}>{col.name}</th> // Appliquer pl-8 uniquement à la première colonne
            ))}
        </tr>
    );
}

function Rows({nbre_rows, columns}) {
    let rows = [];

    for (let i = 0; i < nbre_rows; i++) {
        const backgroundColor = i % 2 === 0 ? "bg-white" : "bg-gray-100";

        rows.push(
            <tr className={`text-left font-cogip-roboto font-semibold pl-3 ${backgroundColor}`}>
                {columns.map((col, index) => (
                    <td key={index} className={index === 0 ? "pl-8 w-1/6 h-12" : "w-1/6 h-12"}>{col.data[i]}</td> // Appliquer pl-8 uniquement à la première colonne
                ))}
            </tr>
        );
    }
    return rows;
}