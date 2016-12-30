import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const ContactForm = (props) => {
    const { handleSubmit, buttonText} = props;
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <Field className="form-control" component="input" id="firstname" name="first_name" type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <Field className="form-control" component="input" id="lastname" type="text" name="last_name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <Field className="form-control" component="input" id="email" type="email" name="email" />
            </div>
            <button type="submit" className="btn btn-default">{buttonText}</button>
        </form>
    )
}

export default reduxForm({
  form: 'contact'
})(ContactForm);