import React from 'react';
import ContactForms from './ContactForms';

const NewContact = (props) => {
    return(
        <div className="container">
            <h1> Add contact </h1>
            <form>
                <ContactForms contact={{}}/>
                <button type="submit" className="btn btn-default">Add New Contact</button>
            </form>
        </div>
    )
};

export default NewContact;