import React from "react"

const AddContact = () => {
    return (
        <div className="ui main">
            <h1>Add Contact</h1>
            <h1>Add Contact</h1>
            <form className="ui form"> 
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;