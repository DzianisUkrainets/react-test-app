import React from 'react';

const ContactForms = (props) => {
    const {first_name, last_name, email} = props.contact;
    return(
        <div>
            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input className="form-control" id="firstname" name="first_name" type="text" defaultValue={first_name}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input className="form-control" id="lastname" type="text" name="last_name" defaultValue={last_name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input className="form-control" id="email" type="text" name="email" defaultValue={email}/>
            </div>
        </div>
    )
}

export default ContactForms;