import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, UPDATE_CONTACT} from '../constants';

const nameInitialState = { contacts: [], currentContact: {} }

export default (state = nameInitialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return  Object.assign({}, state, {contacts: action.contacts})
        case EDIT_CONTACT:
            return  Object.assign({}, state, {currentContact: action.contact})
        case UPDATE_CONTACT:
            return  Object.assign({}, state, {currentContact: {}})    
        default:
            return state
    }
}


