import React, { Component } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux';
import ContactService from '../api/ContactService';
import store from '../store';
import { GetContacts } from '../actions'

const ContactList = (props) => {

    const handleSubmit = values => {
        props.updateContact(values);
        props.router.push('/');
    };

    return(
        <div className ="container">
            <table className ="table">
                <tbody>
                    {props.contacts.map( (item, index) => <Contact key={index} contact={item}/>)}
                </tbody>
            </table>
            <a href="#/contacts/new">Add New Contact</a>
        </div>
    )
}

export default connect(
    state => state.contact)
(ContactList);