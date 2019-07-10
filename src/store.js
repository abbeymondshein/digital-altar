import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import logger, { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension' 

// const middleware = [ thunk ] ; 
// // if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
//     middleware.push(logger)
// // }


const store =  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// export default createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(
//       logger
//     ))
//   )

export default store;