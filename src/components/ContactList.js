import React from 'react'
import Contact from './Contact'
import { connect } from 'react-redux';
import { Link } from 'react-router';

const ContactList = (props) => {
    return(
        <div className="container">
            <table className="table">
                <tbody>
                    {props.contacts.map( (item, index) => <Contact key={index} contact={item}/>)}
                </tbody>
            </table>
            <Link to="contacts/new" className="btn btn-primary">Add New Contact</Link>
        </div>
    )
}

export default connect(
    state => state.contact)(ContactList);