import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT} from '../constants';

const nameInitialState = { contacts: [ {
            "id": 1,
            "first_name": "FirstName1",
            "last_name": "LastName1",
            "email": "lastname1@gmail.com"
        }] }

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


