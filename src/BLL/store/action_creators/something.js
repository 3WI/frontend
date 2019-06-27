import {actions as a} from "../constants";
import {client} from "../../client";


export const setSomething = (data) => ({type: a.SET_SOMETHING, payload: data});

export const getSomethingError = () => ({type: a.GET_SOMETHING_ERROR});

export const getSomething = (url) => (dispatch) => {
    client.get(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((data) => dispatch(setSomething(data)))
        .catch(() => dispatch(getSomethingError))
};
