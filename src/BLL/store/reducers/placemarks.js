import {actions as a} from '../constants';


const placemarks = (state={}, action) => {
    switch (action.type) {
        case a.SET_PLACEMARKS:
            return {
                ...state,
                data: action.payload,
            };
        case a.GET_PLACEMARKS_ERROR:
            return {
                ...state,
                getPlacemarksError: false,
            };
        default:
            return state;
    }
};


export default placemarks;