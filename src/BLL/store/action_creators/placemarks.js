import {actions as a} from "../constants";
import {client} from "../../client";


export const setPlacemarks = (data) => ({type: a.SET_PLACEMARKS, payload: data});

export const getPlacemarksError = () => ({type: a.GET_PLACEMARKS});

export const getPlacemarks = (url) => (dispatch) => {
    client.get(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((data) => dispatch(setPlacemarks(data)))
        .catch(() => dispatch(getPlacemarksError))
};
