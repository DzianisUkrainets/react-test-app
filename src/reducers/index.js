import { combineReducers } from 'redux'

const nameInitialState = {}
const reducer = (state = nameInitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({ reducer });