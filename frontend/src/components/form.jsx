export default function Form({
                                 title = "default title",
                                 option1 = "default option 1",
                                 option1Type = "text",
                                 option2 = "default option 2",
                                 option2Type = "text",
                                 option3 = "default option 3",
                                 option3Type = "text"
                             }) {

    return (
        <section className="p-8 m-8 rounded-lg bg-white">

            <h2 className="font-bold text-2xl pt-8  ">{title}</h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>


            <div>
                <form action="" method="post" className="flex-wrap">

                    {/* <label for="reference"></label> */}
                    <input type={option1Type} name="reference" id="reference" placeholder={option1}
                           className="w-full h-[60px] bg-gray-100  ps-8 capitalize mb-[45px] font-cogip-inter font-thin"/>

                    {/* <label for="price"></label> */}
                    <input type={option2Type} name="price" id="price" placeholder={option2}
                           className="w-full h-[60px] bg-gray-100  ps-8 capitalize mb-[45px]  font-cogip-inter font-thin"/>

                    {/* <label for="company"></label> */}
                    <input type={option3Type} name="companyName" id="companyName" placeholder={option3}
                           className="w-full h-[60px] bg-gray-100  ps-8 capitalize mb-[45px]  font-cogip-inter font-thin"/>

                    <input type="submit" value="Save" name="saveBtn"
                           className="w-full h-[60px] bg-cogip-blue  ps-8 capitalize text-left text-white  font-cogip-inter font-normal"/>

                </form>
            </div>
        </section>
    )
}