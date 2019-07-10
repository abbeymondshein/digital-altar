import * as types from '../constants/actionTypes'
// import { dispatch } from 'rxjs/internal/observable/range';

const addedToShelf = itemId => ({
    type: types.ADD_TO_SHELF,
    itemId
})

export const addToShelf = itemId => (dispatch) => {
    dispatch(addedToShelf(itemId))
}