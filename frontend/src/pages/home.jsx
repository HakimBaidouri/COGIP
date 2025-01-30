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
