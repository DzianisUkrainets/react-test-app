import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './constants'

export const GetContacts = contacts => {
    return {
        type: GET_CONTACTS,
        contacts
    }
}

export const AddContact = contact => {
    return {
        type: ADD_CONTACT,
        contact
    }
}

export const EditContact = contact => {
    return {
        type: EDIT_CONTACT,
        contact
    }
}

export const RemoveContact = id => {
    return {
        type: REMOVE_CONTACT,
        id
    }
}


