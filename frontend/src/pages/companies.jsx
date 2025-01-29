function Companies() {
    return (
      <div>
        <h2>All companies</h2>
  
        <section >
          <form>
            <input type="text" className="border p-2" placeholder="Search contact" id="search-input" />
            <button type="submit">Search</button>
          </form>
        </section>
  
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>TVA</th>
                        <th>Country</th>
                        <th>Type</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {/*remplir avec BDD */}
                    <tr>
                        <td>name</td> 
                        <td>tva</td>
                        <td>country</td>
                        <td>type</td>
                        <td>date</td>
                    </tr>
                </tbody>
            </table>
        </section>
  
        <section>
          <ul>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default Companies;
  