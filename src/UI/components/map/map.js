import React, {Component} from 'react';
import {YMaps, Map, SearchControl, GeolocationControl, Placemark} from 'react-yandex-maps';
import {editPlacemark, getPlacemarks} from "../../../BLL/store/action_creators/placemarks";
import {MAP_COORDINATES, API_KEY, urls, colors as c} from "../../../BLL/store/constants";
import {connect} from 'react-redux';
import {getAddress, setCurrentItem} from "../../../BLL/store/action_creators/placemark";
import './map.module.css';


class DumpMap extends Component {
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
                                onClick={this.props.onEditPlacemark}
                                key={placemark.id}
                                geometry={placemark.coordinates}
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
        filters: state.filters,
        placemarks: state.placemarks.filter(placemark => !state.filters[placemark.state])
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSetCurrentItem(item) {
            dispatch(setCurrentItem(item));
        },
        onEditPlacemark() {
            dispatch(editPlacemark());
        },
        openNewItemCard(coordinates) {
            dispatch(getAddress(coordinates))
        }

    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(DumpMap);
