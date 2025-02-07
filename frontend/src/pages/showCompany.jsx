function ShowCompany() {
    return (
        <div>
            <section>
                <h2>Name Company</h2> {/* BDD */}
                <p>Name : </p>
                <p>TVA : </p>
                <p>Country : </p>
                <p>Type : </p>
            </section>

            <section>
                <h2>Contact people</h2>
                <img src="" alt=""/>


            </section>

            <section>
                <h2>Last invoices</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Invoice number</th>
                        <th>Due dates</th>
                        <th>Company</th>
                        <th>Created at</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>nbr</td>
                        <td>date</td>
                        <td>Compani</td>
                        <td>date</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ShowCompany;