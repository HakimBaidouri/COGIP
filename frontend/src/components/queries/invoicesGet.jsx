import React, { useEffect, useState } from 'react';
import Datalist from "../datalist.jsx";

const InvoicesList = () => {
    const [columnsLarge, setColumnsLarge] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await fetch('http://localhost:3001/cogip/api/invoice'); 
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des factures');
                }
                const invoices = await response.json();

                console.log(invoices); // Vérifiez la réponse ici

                if (!Array.isArray(invoices)) {
                    throw new Error('La réponse de l\'API n\'est pas un tableau');
                }

                // Transformation des données
                const transformedData = [
                    {
                        name: "Invoice Number", 
                        id: invoices.map(invoice => invoice.id), 
                        data: invoices.map(invoice => invoice.ref) 
                    },
                    {
                        name: "Price", 
                        data: invoices.map(invoice => invoice.price) 
                    },
                    {
                        name: "Company Name", 
                        data: invoices.map(invoice => invoice.name) 
                    },
                    {
                        name: "Created_at",
                        data: invoices.map((invoice) => {
                            const date = new Date(invoice.created_at);
                            return date.toLocaleDateString('fr-FR');
                        })
                    }
                ];

                setColumnsLarge(transformedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInvoices();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <Datalist
            title={"All invoices"}
            columns={columnsLarge}
            dataType="invoices"
            decorationBar={true}
            hidePagination={false}
            hideSearchBar={false}
        />
    );
};

export default InvoicesList;
