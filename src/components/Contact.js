import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { RemoveContact} from '../actions/actions';
import { connect } from 'react-redux';

const Contact = (props) => {
    const { id, first_name, last_name, email} = props.contact;
    
    const removeContact = () => {
        props.removeContact(id);
    };

    return(
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td><Link to={'contacts/' + id} className="btn btn-primary">Edit</Link><button className="btn btn-primary" onClick={removeContact}>Remove</button></td>
        </tr>
    )
}

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        
    }).isRequired,
    removeContact: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeContact: (id) => {
            dispatch(RemoveContact(id));               
        }
    }
}

export default connect(null, mapDispatchToProps)(Contact)