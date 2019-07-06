import React, {Component} from 'react';
import {YMaps, Map, SearchControl, GeolocationControl, Placemark} from 'react-yandex-maps';
import {getPlacemarks} from "../../../BLL/store/action_creators/placemarks";
import {MAP_COORDINATES, API_KEY, urls, colors as c} from "../../../BLL/store/constants";
import {connect} from 'react-redux';
import {getAddress} from "../../../BLL/store/action_creators/placemark";
import './map.module.css';


class DumpMap extends Component {
    componentWillMount() {
        this.props.getPlacemarks(urls.GET_PLACEMARKS_URL);
    }

    render() {
        return (
            <YMaps
                enterprise
                query={{
                    apikey: API_KEY,
                }}
            >
                <Map
                    width="1280px"
                    height='900px'
                    defaultState={{center: MAP_COORDINATES, zoom: 9}}
                    onClick={e => this.props.openNewItemCard(e.get('coords'))}
                >
                    <GeolocationControl />
                    <SearchControl />
                    {this.props.placemarks.map(
                        placemark => (
                            <Placemark
                                key={placemark.id}
                                geometry={placemark.ll}
                                properties={{
                                    hintContent: placemark.name,
                                }}
                                options={{iconColor: c[placemark.state]}}
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
            dispatch(getAddress(coordinates))
        }

    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(DumpMap);
