import React, {useEffect, useState} from 'react';
import Datalist from "../datalist.jsx";

const CompaniesList = () => {
    const [columnsLarge, setColumnsLarge] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('http://localhost:3001/cogip/api/company'); // Modifiez l'URL ici
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des entreprises');
                }
                const companies = await response.json();

                console.log(companies); // Vérifiez la réponse ici

                if (!Array.isArray(companies)) {
                    throw new Error('La réponse de l\'API n\'est pas un tableau');
                }

                const transformedData = [
                    {
                        name: "Name",
                        id: companies.map(company => company.id),
                        data: companies.map(company => company.name) // Assurez-vous que 'name' est une clé valide
                    },
                    {
                        name: "TVA",
                        data: companies.map(company => company.tva) // Assurez-vous que 'tva' est une clé valide
                    },
                    {
                        name: "Country",
                        data: companies.map(company => company.country) // Assurez-vous que 'country' est une clé valide
                    },
                    {
                        name: "Type",
                        data: companies.map(company => company.type) // Assurez-vous que 'type' est une clé valide
                    },
                    {
                        name: "Created_at",
                        data: companies.map(company => company.created_at) // Assurez-vous que 'date' est une clé valide
                    }
                ];

                setColumnsLarge(transformedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</ div>;
    }

    return (

        <Datalist
            title={"All companies"}
            columns={columnsLarge}
            dataType="companies"
            decorationBar={true}
            hidePagination={false}
            hideSearchBar={false}
        />


    );
};

export default CompaniesList;