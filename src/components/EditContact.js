import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateContact } from '../actions'
import ContactService from '../api/ContactService';
import ContactForms from './ContactForms';

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentContact.id,
            first_name: this.props.currentContact.first_name,
            last_name: this.props.currentContact.last_name,
            email: this.props.currentContact.email
        }
    }

    onChange(event) {
        var target = event.target;
        let newState = {};
        newState[target.name] = target.value;
        this.setState(newState);
    }

    submit(event) {
        this.props.updateContact(this.state);
        event.preventDefault();
        this.props.router.push('/')
    }
    render() {
        return (
            <div className="container">
                <h1> Edit Contact </h1>
                <ContactForms initialValues= {this.state} buttonText="Save"/>                
            </div>
            );
    }
}

const service = new ContactService();

const mapDispatchToProps = (dispatch) => {
    return {
        updateContact: (contact) => {
            service.update(contact).then( result => 
                {
                    dispatch(UpdateContact(result));
                }    
            )               
        }
    }
};

export default connect(
    state => { return {currentContact: state.contact.currentContact} } , 
    mapDispatchToProps)
(EditContact);