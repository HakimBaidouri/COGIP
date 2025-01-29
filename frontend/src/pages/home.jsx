function Home() {
  return (
    <div>
      <h1>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</h1>

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
      </table>
      </section>

      <section>
      <h2>Last contacts</h2>
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
      </table>
      </section>

      <section>
      <h2>Last companies</h2>
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
      </table>
      </section>
    </div>
  );
}

export default Home;
