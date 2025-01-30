function Contacts() {
    return (
      <div>
        <h2>All Contacts</h2>
  
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
                <th>Phone</th>
                <th>Mail</th>
                <th>Company</th>
                <th>Created at</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Nbr Phone</td>
                <td>mail@example.com</td>
                <td>Company</td>
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
  
  export default Contacts;
  