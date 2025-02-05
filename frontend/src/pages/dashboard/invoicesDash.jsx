import Form from "../../components/form.jsx"

function invoicesDash() {
    return (


        <Form
            title={"New Invoice"}
            option1={"reference"}
            option2={"price"}
            option3={"company"}
            option1Type={"text"}
            option2Type={"number"}
            option3Type={"text"}
        />


    );
}

export default invoicesDash;