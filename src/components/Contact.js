import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditContact} from '../actions';
import ContactService from '../api/ContactService';

const Contact = (props) => {
    const { id, first_name, last_name, email, editContact} = props.contact;
    return(
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td><a href={'#/contacts/' + id} onClick={() => props.editContact(id)}>Edit</a></td>
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editContact: (id) => {
            const service = new ContactService();
            service.getById(id).then( result => 
                {
                    dispatch(EditContact(result));
                }    
            )               
        }
    }
};

export default connect(
    state => state , 
    mapDispatchToProps)
(Contact);