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
                <td>John Doe</td>
                <td>+123456789</td>
                <td>johndoe@example.com</td>
                <td>Company A</td>
                <td>2024-01-29</td>
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
  