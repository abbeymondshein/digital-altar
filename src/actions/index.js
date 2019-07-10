import * as types from '../constants/actionTypes'
// import { dispatch } from 'rxjs/internal/observable/range';
import _items from '../api/items.json'
const addedToShelf = itemId => ({
    type: types.ADD_TO_SHELF,
    itemId
})

export const addToShelf = itemId => (dispatch) => {
    dispatch(addedToShelf(itemId))
}

const gotItems = items => ({
    type: types.GOT_ITEMS, 
    items
})

export const getItems = () => dispatch => {
    dispatch(gotItems(_items))
}