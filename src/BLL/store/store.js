import {createStore, combineReducers, applyMiddleware} from 'redux';
import something from './reducers/something';
import thunk from "redux-thunk";
import initialState from "./initialState";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
    combineReducers({something}),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;