import React, { PropTypes } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux';
import { Link } from 'react-router';

const ContactList = (props) => {
    return(
        <div className="container">
            <table className="table">
                <tbody>
                    {props.contacts.map( item => <Contact key={item.id} contact={item}/>)}
                </tbody>
            </table>
            <Link to="contacts/new" className="btn btn-primary">Add New Contact</Link>
        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })).isRequired
}

export default connect(
    state => state.contact)(ContactList);