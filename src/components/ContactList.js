import React, { Component } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux';
import ContactService from '../api/ContactService';
import store from '../store';
import { GetContacts } from '../actions'

class ContactList extends Component {
    componentDidMount() {
        var service = new ContactService();
        service.getAll().then( result => 
            {
                store.dispatch(GetContacts(result.contacts))
            }    
        )    
    }

    render() {
        
        return (
            <div className ="container">
                <table className ="table">
                    <tbody>
                        {this.props.contacts.map( (item, index) => <Contact key={index} contact={item}/>)}
                    </tbody>
                </table>
                <a href="#/contacts/new">Add New Contact</a>
            </div>
        ); 
    }
}

export default connect(
    state => state , 
   /* mapDispatchToProps*/)
(ContactList);