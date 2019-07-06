import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import currentPlacemark from  './reducers/currentPlacemark';
import placemarks from  './reducers/placemarks';
import initialState from "./initialState";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
    combineReducers({currentPlacemark, placemarks}),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;