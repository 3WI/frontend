import {actions as a, API_KEY} from "../constants";
import * as axios from 'axios';

import {getPlacemarksError} from "./placemarks";


export const addNewItem = (coordinates, address) => ({type: a.ADD_PLACEMARK, payload: {coordinates, address}});

export const getAddress = (coordinates) => (dispatch) => {
    const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${API_KEY}&geocode=${coordinates.reverse().join(',')}&results=1`;
    axios.get(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            const {name, description} = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
            return `${name}, ${description}`;
        })
        .then((address) => dispatch(addNewItem(coordinates, address)))
        .catch(() => dispatch(getPlacemarksError))
};

export const closeAddNewItemCard = () => ({type: a.CLOSE_ITEM_CARD});