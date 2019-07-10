import {
    GOT_ITEMS
} from '../constants/actionTypes'

const initialState = {
    availableItems: {}
}

const items = ( state = initialState, action) => {
    switch (action.type) {
        case GOT_ITEMS:
            return {...state, availableItems: action.items};
        default:
            return state;
    }
}

export default items