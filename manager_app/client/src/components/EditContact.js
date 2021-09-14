import React, {useState} from "react"

const EditContact = (props) => {

    const {id, name, email} = props.location.state.contact;

    const [values, setValues] = useState({
        id,
        name,
        email,
    })

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value });
    };
   

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.name === "" || values.email=== "") {
            alert("All fields are mandatory!")
            return;
        }
            props.updateContactHandler(values);
            setValues({name: "", email: ""});
            e.target.reset();
            props.history.push("/");
    };

    return (
        <div className="ui main">
            
            <h1>Edit Contact</h1>
            <form className="ui form" onSubmit={handleSubmit}> 
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange('name')}/>
                </div>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="email" placeholder="email" onChange={handleChange('email')}/>
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    )
}

export default EditContact;