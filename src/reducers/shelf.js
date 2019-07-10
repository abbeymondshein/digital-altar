import {
    ADD_TO_SHELF
} from '../constants/actionTypes'

const initialState = {
    currentItemsById: [],
};

// const currentItemsById = (state = initialState, action) => {
//     const {itemId} = action;
//     switch (action.type) {
//         case ADD_TO_SHELF:
//             return {...state, [itemId]: state[itemId]}; 
//     default:
//         return state;
//     }
// }

const shelf = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SHELF:
            return {...state, }
    default: 
    return state;
    }
};

export default shelf;