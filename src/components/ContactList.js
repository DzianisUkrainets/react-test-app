import React, { Component } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux';
import ContactService from '../api/ContactService';
import {store} from '../index';
import { GetContacts } from '../actions'

class ContactList extends Component {
    componentDidMount() {
        ContactService.getAll().then( contact => 
            store.dispatch(GetContacts(contact))
        )    
    }

    render() {
        
        return (
            <table>
                {this.props.contacts.map( (item, index) => <Contact key={index} contact={item}/>)}
            </table>
        ); 
    }
}

export default connect(
    state => state, 
   /* mapDispatchToProps*/)
(ContactList);