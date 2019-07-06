import {actions as a} from "../constants";


export const addNewItem = (coordinates) => ({type: a.ADD_PLACEMARK, payload: coordinates});

export const closeAddNewItemCard = () => ({type: a.CLOSE_ITEM_CARD});
