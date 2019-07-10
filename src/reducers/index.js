import { combineReducers } from 'redux';
import shelf from '../reducers/shelf'
import items from '../reducers/items'

export default combineReducers({
    shelf: shelf,
    items: items
}) 
  