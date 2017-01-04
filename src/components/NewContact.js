import React, { PropTypes } from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { AddContact } from '../actions/actions';

const NewContact = (props) => {
    const { first_name, last_name, email} = props;

    const handleSubmit = values => {
        props.addContact(values);
        props.router.push('/');
    };

    return(
        <div className="container">
            <h1> Add contact </h1>
            <ContactForm initialValues={{ first_name, last_name, email }} buttonText={'Add New Contact'} onSubmit={handleSubmit} />
        </div>
    )
}

NewContact.PropTypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    addContact: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addContact: (contact) => {
            dispatch(AddContact(contact));               
        }
    }
}

export default connect(
    (state) => { return { first_name: '', last_name: '', email: '' } },
    mapDispatchToProps)(NewContact);