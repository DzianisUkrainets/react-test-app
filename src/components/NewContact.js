import React from 'react';
import ContactForm from './ContactForm';

const NewContact = (props) => {
    return(
        <div className="container">
            <h1> Add contact </h1>
            <form>
                <s contact={{}}/>
                <button type="submit" className="btn btn-default">Add New Contact</button>
            </form>
        </div>
    )
};

export default NewContact;