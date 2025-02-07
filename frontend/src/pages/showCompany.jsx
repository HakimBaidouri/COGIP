import InvoicesList from "../components/queries/invoicesGet.jsx";

function ShowCompany({company}) {
    return (
        <section className="px-30 py-10 w-full overflow-hidden">
            <section>
                {/* BDD */}
                <h2 className="font-black font-cogip-inter text-5xl capitalize mb-20">{company.name}</h2>

                <span className="relative block h-7 w-100 bg-cogip-yellow top-[-100px] left-10 z-[-1]"></span>


                <div className="relative top-[-30px] font-black font-cogip-roboto">
                    <p>Name : <span className="font-semibold">{company.name}</span></p>
                    <p>TVA : <span className="font-semibold">{company.tva}</span></p>
                    <p>Country : <span className="font-semibold">{company.country}</span></p>
                    <p>Type : <span className="font-semibold">{company.type}</span></p>
                </div>

                <hr className="w-full bg-gray-300 border-none h-[1px] mb-[50px] mt-5"/>
            </section>


            <section>
                <h2 className="font-black font-cogip-inter text-5xl capitalize mb-20">Contact people</h2>
                <div className="container grid grid-cols-3">
                    {/*    TODO: Module affichant tous les contacts reliés à cette company dans une grid à 3 columns */}
                </div>

                <hr className="w-full bg-gray-300 border-none h-[1px] mb-[50px] mt-5"/>
            </section>

            <section>
                {/* TODO: Adapter le fetch pour n'afficher que les invoices reliés à l'entreprise */}
                <InvoicesList
                    title="last invoices"
                />
            </section>
        </section>
    )
}

export default ShowCompany;