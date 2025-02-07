import React, {useEffect, useState} from 'react';

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
                        id: companies.map((_, index) => index + 1),
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
                        name: "Date",
                        data: companies.map(company => company.date) // Assurez-vous que 'date' est une clé valide
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
        <div>
            <h1>Liste des entreprises</h1>
            <pre>{JSON.stringify(columnsLarge, null, 2)}</pre>
        </div>
    );
};

export default CompaniesList;