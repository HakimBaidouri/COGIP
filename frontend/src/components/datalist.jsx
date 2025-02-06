import {useState} from 'react';
import {Link} from "react-router-dom";

export default function Datalist({
                                     title = "default title",
                                     nbre_rows,
                                     columns,
                                     dataType,
                                     decorationBar = false,
                                     hideSearchBar = true,
                                     hidePagination = true,
                                     adminMode = false
                                 }) {
    console.log({columns});

    // Search
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const filteredRowIndexes = columns.length > 0
        ? columns[0].data.map((_, rowIndex) =>
            columns[0].data[rowIndex].toLowerCase().includes(searchQuery.toLowerCase()) // Rechercher uniquement dans le nom
        )
        : [];

    // Debugging: Log filtered row indexes
    console.log("Filtered Row Indexes:", filteredRowIndexes);

    // Calcul du nombre de lignes après filtrage
    const filteredRowCount = filteredRowIndexes.filter(Boolean).length;

    // Pagination
    const paginatedRows = adminMode
        ? filteredRowIndexes
            .map((isVisible, index) => (isVisible ? index : -1)) // Suivi des indices des lignes visibles
            .filter(index => index !== -1) // Supprimer les -1 du tableau de pagination
            .slice(0, 5) // Limiter à 5 lignes en mode admin
        : filteredRowIndexes
            .map((isVisible, index) => (isVisible ? index : -1)) // Suivi des indices des lignes visibles
            .filter(index => index !== -1) // Supprimer les -1 du tableau de pagination
            .slice((currentPage - 1) * pageSize, currentPage * pageSize); // Récupérer les lignes de la page actuelle

    const totalPages = Math.ceil(filteredRowCount / pageSize);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const displayedColumns = adminMode ? columns.slice(0, 3) : columns;

    return (
        <section className="px-30 py-10 flex w-full overflow-hidden">
            <div className="datalist w-full overflow-hidden">
                <h2 className="font-black font-cogip-inter text-5xl capitalize pb-20">{title}</h2>
                {decorationBar && (
                    <span className="relative block h-7 w-55 bg-cogip-yellow top-[-95px] left-[130px] z-[-1]"></span>
                )}
                {!hideSearchBar && (
                    <div className="search-bar mb-10 flex justify-end">
                        <input
                            type="text"
                            className="border px-3 py-2 rounded-lg"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                )}
                <table className="w-full">
                    <thead>
                        <Columns columns={displayedColumns} />
                    </thead>
                    <tbody>
                        <Rows columns={displayedColumns} filteredRowIndexes={paginatedRows} />
                    </tbody>
                </table>
                {!hidePagination && totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
            </div>
        </section>
    );
}

function Columns({ columns }) {
    return (
        <tr className="text-left font-cogip-roboto bg-cogip-yellow h-12 capitalize font-semibold">
            {columns.map((col, index) => (
                <th key={index} className={index === 0 ? "pl-8 w-1/6" : "w-1/6"}>
                    {col.name}
                </th>
            ))}
        </tr>
    );
}

function Rows({ columns, filteredRowIndexes }) {
    return filteredRowIndexes.map((i, rowIndex) => {
        const backgroundColor = rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100";

        return (
            <tr key={i} className={`text-left font-cogip-roboto font-semibold pl-3 ${backgroundColor}`}>
                {columns.map((col, index) => (
                    <td key={index} className={index === 0 ? "pl-8 w-1/6 h-12" : "w-1/6 h-12"}>
                        {col.data[i]}
                    </td>
                ))}
            </tr>
        );
    });
}

