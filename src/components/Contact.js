import React from 'react';
import { Link } from 'react-router';

const Contact = (props) => {
    const { id, first_name, last_name, email} = props.contact;
    return(
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td><Link to={'contacts/' + id} className="btn btn-primary">Edit</Link></td>
        </tr>
    )
}

export default Contact