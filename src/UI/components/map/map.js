import React, {Component} from 'react';
import {YMaps, Map, SearchControl, GeolocationControl, Placemark} from 'react-yandex-maps';
import {getPlacemarks} from "../../../BLL/store/action_creators/placemarks";
import {urls} from "../../../BLL/store/constants";
import {connect} from 'react-redux';
import {addNewItem} from "../../../BLL/store/action_creators/placemark";


class DumpMap extends Component {
    componentWillMount() {
        this.props.getPlacemarks(urls.GET_PLACEMARKS_URL);
    }

    render() {
        return (
            <YMaps>
                <Map defaultState={{center: [55.75, 37.57], zoom: 9}} onClick={e => this.props.openNewItemCard(e.get('coords'))}>
                    <GeolocationControl />
                    <SearchControl />
                    {this.props.placemarks.map(
                        placemark => (
                            <Placemark
                            geometry={placemark.coordinates}
                            properties={{
                                hintContent: 'Stack Overflow',
                                balloonContent: 'Stack Overflow на русском',
                            }}
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            />
                        )
                    )}
                </Map>
            </YMaps>
        );
    }
}


const mapStatesToProps = (state) => {
    return {
        placemarks: state.placemarks.data
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getPlacemarks(url) {
            dispatch(getPlacemarks(url));
        },
        openNewItemCard(coordinates) {
            dispatch(addNewItem(coordinates))
        }

    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(DumpMap);
