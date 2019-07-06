const initialState = {
    placemarks: {
        getPlacemarksError: false,
        data: []
    },
    currentPlacemark: {
        isDisplayed: false,
        coordinates: [],
        address: ''
    }
};

export default initialState;