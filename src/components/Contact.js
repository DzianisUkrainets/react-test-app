import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.contact.first_name}</td>
                <td>{this.props.contact.last_name}</td>
                <td>{this.props.contact.email}</td>
            </tr>);
    }
}