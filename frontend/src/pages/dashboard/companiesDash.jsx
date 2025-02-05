import Form from "../../components/form.jsx";

function contactsDash() {
    return (

        <Form
            title={"New company"}
            option1={"name"}
            option2={"phone number"}
            option3={"email"}
            option1Type={"text"}
            option2Type={"number"}
            option3Type={"text"}
        />

    );
}

export default contactsDash;