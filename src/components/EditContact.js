import React from 'react';
import { connect } from 'react-redux';
import { EditContact as Edit } from '../actions/actions'
import ContactForm from './ContactForm';

const EditContact = (props) => {
    const { id, first_name, last_name, email} = props;
    
    const handleSubmit = values => {
        props.updateContact(values);
        props.router.push('/');
    };

    return(
        <div className="container">
            <h1> Edit Contact </h1>
            <ContactForm initialValues={{ id, first_name, last_name, email }} onSubmit={handleSubmit} buttonText="Save"/>                
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateContact: (contact) => {
            dispatch(Edit(contact));               
        }
    }
}

const getContactById = (contacts, id) => contacts.find(item => item.id == id);

export default connect(
    (state, ownProps) => getContactById(state.contact.contacts, ownProps.params.contactId), 
        mapDispatchToProps)(EditContact);