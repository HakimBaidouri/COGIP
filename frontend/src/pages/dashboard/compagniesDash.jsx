function contactsDash(){
    <div>
        <section>
            <h3>Dashboard</h3> {/* BDD */}
            <p>dashboard/new-companie</p>
        </section>

        <section>
            <h2>Welcome back 'Name'</h2>  {/* BDD */}
            <p>You can here add an invoice, a company
            and some contacts</p>
            <img src="" alt="" />
        </section>

        <section>
            <p>New companie</p>
        </section>

        <section>
            <div>
                <form action="" method="post">

                    {/* <label for="name"></label> */}
                    <input type="text" name="name" id="name" placeholder="Name"/>

                    {/* <label for="phone"></label> */}
                    <input type="number" name="phone" id="phone" placeholder="Phone Number"/>

                    {/* <label for="email"></label> */}
                    <input type="email" name="email" id="email" placeholder="Email"/>

                    <input type="submit" value="Save" name="saveBtn"/>

                </form>
            </div>
        </section>
        
    </div>
}

export default contactsDash;