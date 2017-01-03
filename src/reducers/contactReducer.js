import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from '../actions/constants';
import * as samples from '../api/samples.json';

const initialState = { contacts: samples.contacts };

const updateContact = (state, contact) => {
    const { id, first_name, last_name, email} = contact;
    let contacts = state.contacts;
    let index = contacts.findIndex(item => item.id === contact.id);
    return index > -1 ? { contacts: [...contacts.slice(0, index), { id, first_name, last_name, email }, ...contacts.slice(index + 1)] } : state;
}

const addContact = (state, contact) => {
    const { first_name, last_name, email} = contact;
    let contacts = state.contacts;
    const newId = new Date().getTime();
    return { contacts: [...contacts, { id: newId, first_name, last_name, email }] };     
}

const removeContact = (state, id) => {
    let contacts = state.contacts;
    let index = contacts.findIndex(item => item.id === id);
    return { contacts: [...contacts.slice(0, index),...contacts.slice(index + 1)] };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return Object.assign({}, state, {contacts: action.contacts});
        case EDIT_CONTACT:
            return updateContact(state, action.contact);
        case ADD_CONTACT:
            return addContact(state, action.contact);   
        case REMOVE_CONTACT:
            return removeContact(state, action.id);
        default:
            return state;
    }
}