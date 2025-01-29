function Invoices() {
    return (
      <div>
        <h2>All Invoices</h2>
  
        <section >
          <form>
            <input type="text" className="border p-2" placeholder="Search company" id="search-input" />
            <button type="submit">Search</button>
          </form>
        </section>
  
        <section>
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
  
  export default Invoices;
  