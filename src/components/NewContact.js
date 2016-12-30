import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { AddContact } from '../actions/actions';

const NewContact = (props) => {
    const { id, first_name, last_name, email} = props;

    const handleSubmit = values => {
        props.addContact(values);
        props.router.push('/');
    };

    return(
        <div className="container">
            <h1> Add contact </h1>
            <ContactForm contact={{ id, first_name, last_name, email }} buttonText={'Add New Contact'} onSubmit={handleSubmit} />
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addContact: (contact) => {
            dispatch(AddContact(contact));               
        }
    }
}

export default connect(
    (state) => { return { id: -1, first_name: '', last_name: '', email: '' } },
    mapDispatchToProps)(NewContact);