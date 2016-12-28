import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT} from '../constants';

const nameInitialState = { contacts: [] }

export default (state = nameInitialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            var obj =  Object.assign({}, state, action)
            return obj;
        break
        default:
            return state
    }
}


