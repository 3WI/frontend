import {actions as a} from "../constants";
import * as axios from 'axios';


export const setPlacemarks = (data) => ({type: a.SET_PLACEMARKS, payload: data});

export const getPlacemarksError = () => ({type: a.GET_PLACEMARKS_ERROR});

export const getPlacemarks = (url) => (dispatch) => {
    axios.get(url)
        .then((response) => {
            console.log(response);
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.data.payload)
        .then((data) => dispatch(setPlacemarks(data)))
        .catch(() => dispatch(getPlacemarksError))
};
