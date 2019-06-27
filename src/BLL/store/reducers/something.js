import {actions as a} from '../constants';


const Something = (state={}, action) => {
    switch (action.type) {
        case a.SET_SOMETHING:
            return {
                ...state,
                data: action.payload,
            };
        case a.GET_SOMETHING_ERROR:
            return {
                ...state,
                getError: true,
            };
        default:
            return state;
    }
};


export default Something;