import Datalist from "../components/datalist.jsx";

function Home() {
    return (
        <div>
            <section
                className="bg-cogip-yellow  h-screen w-screen">

                <div className="p-30 flex items-center font-black leading-[78] font-cogip-inter align-middle">
                    <div className=" flex-1 text-7xl uppercase">MANAGE YOUR
                        CUSTOMERS AND
                        INVOICES EASILY
                    </div>
                    <img src="/index/index_illustration.png" className="flex-1 text-8xl " alt="coder hipster">
                    </img>
                </div>

            </section>

            <Datalist
                table_name={"companies"}
                nbre_rows={16}
                column1={"name"}
                column2={"vat"}
                column3={"country"}
                column4={"Type"}

            />

            <Datalist
                table_name={"contacts"}
                nbre_rows={120}
                column1={"First Name"}
                column2={"Last Name"}
                column3={"Email"}
                column4={"Phone"}

            />

            <Datalist
                table_name={"invoices"}
                nbre_rows={5}
                column1={"Company Name"}
                column2={"Invoice Date"}
                column3={"Invoice Number"}
                column4={"Total Amount"}

            />

            <section
                className="h-[550px] w-screen relative overflow-hidden">

                <div className="p-30 flex items-center font-black leading-[78] font-cogip-inter align-middle">
                    <div className=" flex-1 text-7xl uppercase">work better in your company
                    </div>
                    <div className="flex-2 flex align-middle items-center justify-center">
                        <img src="/index/index_illustration_2.png" className=" h-[384px] w-auto" alt="phone">
                        </img>
                    </div>

                    <div
                        className="absolute bottom-[-400px] right-0 w-[1200px] h-[700px] bg-cogip-yellow  transform rotate-[16deg] z-[-10]">

                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;
