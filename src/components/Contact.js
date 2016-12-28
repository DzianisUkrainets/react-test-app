import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditContact} from '../actions';
import ContactService from '../api/ContactService';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.contact.first_name}</td>
                <td>{this.props.contact.last_name}</td>
                <td>{this.props.contact.email}</td>
                <td><a href={'#/contacts/' + this.props.contact.id} onClick={() => this.props.editContact(this.props.contact.id)}>Edit</a></td>
            </tr>);
    }
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