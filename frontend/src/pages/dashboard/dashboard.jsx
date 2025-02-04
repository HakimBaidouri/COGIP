function Dashboard(){
    <div>
        
        <section> {/* BDD pour chiffre */}
            <p>Statistics</p>
            <p>Invoices</p>
            <p>Contacts</p>
            <p>Companies</p>
        </section>

        {/* Contacts BDD*/}
        <section>
            <p>Last Contacts</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name X</td>
                <td>Nbr X</td>
                <td>Xmail.com</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Invoices BDD*/}
        <section>
            <p>Last Invoices</p>
          <table>
            <thead>
              <tr>
                <th>Invoice number</th>
                <th>Dates</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nbr X</td>
                <td>date X</td>
                <td>Compani X</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Companies BDD */}
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>TVA</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name X</td> 
                        <td>tva X</td>
                        <td>country X</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
    </div>
}

export default Dashboard;