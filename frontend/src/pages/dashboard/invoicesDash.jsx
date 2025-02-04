function invoicesDash(){
    return(
    <div>
        <section>
            <p>New Invoice</p>
        </section>

        <section>
            <div>
                <form action="" method="post">

                    {/* <label for="reference"></label> */}
                    <input type="text" name="reference" id="reference" placeholder="Reference"/>

                    {/* <label for="price"></label> */}
                    <input type="number" name="price" id="price" placeholder="Price"/>

                    {/* <label for="company"></label> */}
                    <input type="text" name="companyName" id="companyName" placeholder="Company Name"/>

                    <input type="submit" value="Save" name="saveBtn"/>

                </form>
            </div>
        </section>
        
    </div>
    );
}

export default invoicesDash;