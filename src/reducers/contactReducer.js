import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT } from '../actions/constants';
import * as samples from '../api/samples.json';

const initialState = { contacts: samples.contacts };

const updateContact = (state, contact) => {
    const { id, first_name, last_name, email} = contact;
    let index = state.contacts.findIndex(item => item.id === contact.id);
    let contacts = state.contacts;
    return { contacts: [...contacts.slice(0, index), { id, first_name, last_name, email }, ...contacts.slice(index + 1)] };
}

const addContact = (state, contact) => {
    const { first_name, last_name, email} = contact;
    let contacts = state.contacts;
    const newId = contacts[contacts.length - 1].id + 1;
    return { contacts: [...contacts, { id: newId, first_name, last_name, email }] };     
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return Object.assign({}, state, {contacts: action.contacts});
        case EDIT_CONTACT:
            return updateContact(state, action.contact);
        case ADD_CONTACT:
            return addContact(state, action.contact);      
        default:
            return state;
    }
}