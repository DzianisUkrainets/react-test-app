import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateContact } from '../actions'
import ContactService from '../api/ContactService';

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
                <form onSubmit={this.submit.bind(this)} onChange={this.onChange.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input className="form-control" id="firstname" name="first_name" type="text" defaultValue={this.state.first_name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input className="form-control" id="lastname" type="text" name="last_name" defaultValue={this.state.last_name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input className="form-control" id="email" type="text" name="email" defaultValue={this.state.email}/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
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
    state => { return {currentContact: state.currentContact} } , 
    mapDispatchToProps)
(EditContact);