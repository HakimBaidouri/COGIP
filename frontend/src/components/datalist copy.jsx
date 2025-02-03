import { useState } from 'react';

export default function Datalist({ title, nbre_rows, columns, decorationBar, hideSearchBar, hidePagination }) {
    // Search
    const [searchQuery, setSearchQuery] = useState("");

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    // Filter 
    const filteredRowIndexes = columns.length > 0 
        ? columns[0].data.map((_, rowIndex) => 
            columns.some(col => col.data[rowIndex]?.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        : [];
    
    // Calcul du nombre de lignes après filtrage
    const filteredRowCount = filteredRowIndexes.filter(Boolean).length;

    // Pagination
    const paginatedRows = filteredRowIndexes
        .map((isVisible, index) => (isVisible ? index : -1)) // Suivi des indices des lignes visibles
        .filter(index => index !== -1) // Supprimer les -1 du tableau de pagination
        .slice((currentPage - 1) * pageSize, currentPage * pageSize); // Récupérer les lignes de la page actuelle

    // S'assurer qu'il y a toujours 6 colonnes
    const completeColumns = Array.from({ length: 6 }, (_, index) => (
        columns[index] || {
            name: '',
            data: Array(nbre_rows).fill('')
        }
    ));

    const totalPages = Math.ceil(filteredRowCount / pageSize);

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className="p-30 flex w-full overflow-hidden">
            <div className="datalist w-full overflow-hidden">
                <h2 className="font-black font-cogip-inter text-5xl capitalize pb-20">{title}</h2>
                
                {decorationBar && (
                    <span className="relative block h-7 mb-[-89px] w-55 bg-cogip-yellow top-[-95px] left-[130px] z-[-1]"></span>
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
                        <Columns columns={completeColumns} />
                    </thead>
                    <tbody>
                        <Rows columns={completeColumns} filteredRowIndexes={paginatedRows} />
                    </tbody>
                </table>

                {/* pgination */}
                {!hidePagination && totalPages > 1 && (
                <div className="flex items-center justify-center mt-15 gap-2">
                    <PaginationButton 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                        symbol="&#60;"
                    />   {/* Bouton Précédent */}
                    
                    <PaginationButton 
                        onClick={() => handlePageChange(1)} 
                        active={currentPage === 1}
                    >
                        1
                    </PaginationButton> {/* Toujours afficher 1er page */}
                    
                    {currentPage > 3 && <span>...</span>} {/* "..." si on est loin du début */}

                    {/* Pages autour de la page actuelle */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => page >= currentPage - 1 && page <= currentPage + 1 && page !== 1 && page !== totalPages)
                        .map(page => (
                            <PaginationButton 
                                key={page}
                                onClick={() => handlePageChange(page)}
                                active={currentPage === page}
                            >
                                {page}
                            </PaginationButton>
                    ))}
                    
                    {currentPage < totalPages - 2 && <span>...</span>} {/* "..." si on est loin de la fin */}

                    <PaginationButton 
                        onClick={() => handlePageChange(totalPages)} 
                        active={currentPage === totalPages}
                    >
                        {totalPages}
                    </PaginationButton> {/* Toujours afficher la dernière page */}
                    
                    <PaginationButton 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        symbol="&#62;"
                    /> {/*Suivant */}
                </div>
            )}

            </div>
        </section>
    );
}

function Columns({ columns }) {
    return (
        <tr className="text-left font-cogip-roboto bg-cogip-yellow h-12 capitalize font-semibold">
            {columns.map((col, index) => (
                <th key={index} className={index === 0 ? "pl-8 w-1/6" : "w-1/6"}>{col.name}</th>
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
                    <td key={index} className={index === 0 ? "pl-8 w-1/6 h-12" : "w-1/6 h-12"}>{col.data[i]}</td>
                ))}
            </tr>
        );
    });
}

function PaginationButton({ onClick, disabled, active, symbol, children }) {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={`px-4 py-2 ${active ? 'border-cogip-yellow text-cogip-yellow' : 'text-black-200'} 
                        ${disabled ? 'border border-gray-300' : 'border-cogip-yellow'} 
                        rounded-sm 
                        focus:border border-cogip-yellow focus:text-cogip-yellow transition`}
        >
            {symbol || children}
        </button>
    );
}