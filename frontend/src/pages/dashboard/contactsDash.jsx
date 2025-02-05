import Form from "../../components/form.jsx"

function contactsDash() {
    return (


        <Form
            title={"New contact"}
            option1={"name"}
            option2={"tva"}
            option3={"country"}
            option1Type={"text"}
            option2Type={"number"}
            option3Type={"text"}
        />


    );
}

export default contactsDash;