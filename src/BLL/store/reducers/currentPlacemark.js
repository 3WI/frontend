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
        case a.EDIT_PLACEMARK:
            return {
                ...state,
                isEditable: true
            };
        case a.SET_ID:
            return {
                ...state,
                id: action.payload
            };
        case a.SET_NEW_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        case a.SET_NEW_COORDINATES:
            return {
                ...state,
                coordinates: action.payload
            };
        case a.SET_VIOLATION_TYPE:
            return {
                ...state,
                violationType: action.payload
            };
        case a.SET_PLASTIC_TRASH:
            return {
                ...state,
                plastic: action.payload
            };
        case a.SET_METAL_TRASH:
            return {
                ...state,
                metal: action.payload
            };
        case a.SET_GLASS_TRASH:
            return {
                ...state,
                glass: action.payload
            };
        case a.SET_PAPER_TRASH:
            return {
                ...state,
                paper: action.payload
            };
        case a.SET_HOUSEHOLD_TRASH:
            return {
                ...state,
                household: action.payload
            };
        case a.SET_CONSTRUCTION_TRASH:
            return {
                ...state,
                construction: action.payload
            };
        case a.SET_OTHER_TRASH:
            return {
                ...state,
                other: action.payload
            };
        case a.SET_PICTURE:
            return {
                ...state,
                picture: [...state.picture, action.payload]
            };
        case a.SET_COMMENT:
            return {
                ...state,
                comment: action.payload
            };
        case a.DEL_PICTURE:
            return {
                ...state,
                picture: state.picture.filter(pic => action.payload !== pic[0])
            };
        case a.SET_CURRENT_ITEM:
            return {
                ...state,
                ...action.payload
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