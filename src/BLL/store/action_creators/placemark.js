import {actions as a, API_KEY, urls} from "../constants";
import * as axios from 'axios';
import {getPlacemarks, getPlacemarksError} from "./placemarks";
import {v4} from 'uuid'


export const addNewItem = (coordinates, address) => ({type: a.ADD_PLACEMARK, payload: {coordinates, address}});

export const setId = (id) => ({type: a.SET_ID, payload: id});

export const setNewCoordinates = (coordinates) => ({type: a.SET_NEW_COORDINATES, payload: coordinates});

export const setNewAddress = (address) => ({type: a.SET_NEW_ADDRESS, payload: address});

export const setViolationType = (violationType) => ({type: a.SET_VIOLATION_TYPE, payload: violationType});

export const setPlasticTrash = (trash) => ({type: a.SET_PLASTIC_TRASH, payload: trash});

export const setMetalTrash = (trash) => ({type: a.SET_METAL_TRASH, payload: trash});

export const setGlassTrash = (trash) => ({type: a.SET_GLASS_TRASH, payload: trash});

export const setPaperTrash = (trash) => ({type: a.SET_PAPER_TRASH, payload: trash});

export const setHouseholdTrash = (trash) => ({type: a.SET_HOUSEHOLD_TRASH, payload: trash});

export const setConstructionTrash = (trash) => ({type: a.SET_CONSTRUCTION_TRASH, payload: trash});

export const setOtherTrash = (trash) => ({type: a.SET_OTHER_TRASH, payload: trash});

export const setCurrentItem = (item) => ({type: a.SET_CURRENT_ITEM, payload: item});

export const setPicture = (file) => ({type: a.SET_PICTURE, payload: file});

export const setComment = (comment) => ({type: a.SET_COMMENT, payload: comment});

export const delPicture = (fileName) => ({type: a.DEL_PICTURE, payload: fileName});

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

export const getCoordinates = (address) => (dispatch) => {
    const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${API_KEY}&geocode=${address}&results=1`;
    dispatch(setNewAddress(address));
    axios.get(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(c => +c);
        })
        .then((coordinates) => dispatch(setNewCoordinates(coordinates)))
        .catch(() => dispatch(getPlacemarksError))
};

export const saveItem = (item) => ({type: a.SAVE_ITEM, payload: item});


export const closeAddNewItemCard = () => ({type: a.CLOSE_ITEM_CARD});