import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength, email } from './validators';

const renderField = ({ input, label, type, className, meta: { touched, error } }) => (
    <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
        <input {...input} placeholder={label} type={type} className={className}/>
        {touched && ((error && <span className="red">{error}</span>))}
    </div>
)

const ContactForm = (props) => {
    const { handleSubmit, buttonText} = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field className="form-control" name="first_name" type="text" component={renderField} label="First Name" validate={[ required, maxLength ]} />
            <Field className="form-control" name="last_name" type="text" component={renderField} label="Last Name" validate={[ required, maxLength ]} />
            <Field className="form-control" name="email" type="text" component={renderField} label="Email" validate={[ required, email ]} />
            <button type="submit" className="btn btn-default">{buttonText}</button>
        </form>
    )
}

ContactForm.PropTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number, 
        first_name: PropTypes.string,
        last_name: PropTypes.string, 
        email: PropTypes.string
    }).isRequired,
    buttonText: PropTypes.string.isRequired
}

export default reduxForm({
  form: 'contact',
})(ContactForm);