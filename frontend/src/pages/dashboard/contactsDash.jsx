function contactsDash(){
    <div>
       
        <section>
            <p>New contact</p>
        </section>

        <section>
            <div>
                <form action="" method="post">

                    {/* <label for="name"></label> */}
                    <input type="text" name="name" id="name" placeholder="Name"/>

                    {/* <label for="phone"></label> */}
                    <input type="text" name="tva" id="tva" placeholder="TVA"/>

                    {/* <label for="email"></label> */}
                    <input type="text" name="country" id="country" placeholder="Country"/>

                    <input type="submit" value="Save" name="saveBtn"/>

                </form>
            </div>
        </section>
        
    </div>
}

export default contactsDash;