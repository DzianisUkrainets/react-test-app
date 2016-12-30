import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditContact as Edit } from '../actions'
import ContactService from '../api/ContactService';
import ContactForm from './ContactForm';

const EditContact = (props) => {
    
    const handleSubmit = values => {
        props.updateContact(values);
        props.router.push('/');
    };

    return(
        <div className="container">
            <h1> Edit Contact </h1>
            <ContactForm initialValues= {props} onSubmit={handleSubmit} buttonText="Save"/>                
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateContact: (contact) => {
            dispatch(Edit(contact));               
        }
    }
};

const getContactById = (contacts, id) => contacts.find(item => item.id == id);

export default connect(
(state, ownProps) => getContactById(state.contact.contacts, ownProps.params.contactId), 
    mapDispatchToProps)
(EditContact);