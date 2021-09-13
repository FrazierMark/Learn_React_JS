import React, {useState} from "react"

const AddContact = (props) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
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
            props.addContactHandler(values);
            setValues({name: "", email: ""});
            e.target.reset()
    };

    return (
        <div className="ui main">
            
            <h1>Add Contact</h1>
            <form className="ui form" onSubmit={handleSubmit}> 
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange('name')}/>
                </div>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="email" placeholder="email" onChange={handleChange('email')}/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;