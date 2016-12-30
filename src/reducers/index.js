import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, UPDATE_CONTACT } from '../actions/constants';
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ContactService from '../api/ContactService';
import * as samples from '../api/samples.json';

const initialState = { contacts: samples.contacts };

const mapToContact = (formValues) => ({
    id: formValues.id,
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    email: formValues.email
})

const updateContact = (state, contact) => {
    let index = state.contacts.findIndex(item => item.id == contact.id);
    let contacts = state.contacts;
    return { contacts: [...contacts.slice(0, index), mapToContact(contact), ...contacts.slice(index + 1)] };
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return Object.assign({}, state, {contacts: action.contacts})
        case EDIT_CONTACT:
            return updateContact(state, action.contact)
        default:
            return state
    }
}

export default combineReducers({ contact: contactReducer, form: formReducer })

