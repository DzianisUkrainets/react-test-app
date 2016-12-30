import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditContact} from '../actions';
import ContactService from '../api/ContactService';
import { Link } from 'react-router';

const Contact = (props) => {
    const { id, first_name, last_name, email, editContact} = props.contact;
    return(
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td><Link to={'contacts/' + id}>Edit</Link></td>
        </tr>
    )
}

export default Contact