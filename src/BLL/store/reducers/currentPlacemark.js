import {actions as a} from '../constants';


const currentPlacemark = (state={}, action) => {
    switch (action.type) {
        case a.ADD_PLACEMARK:
            return {
                ...state,
                coordinates: action.payload.coordinates,
                address: action.payload.address,
                isDisplayed: true
            };
        case a.CLOSE_ITEM_CARD:
            return {
                ...state,
                isDisplayed: false,
            };
        default:
            return state;
    }
};


export default currentPlacemark;