import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import ItemCard from './addItemForm/itemCard';


class App extends Component {
    render() {
        return (
            <div>
                <DumpMap />
                {this.props.addNewItemCardIsDisplayed && <ItemCard />}
            </div>

        );
    }
}


const mapStatesToProps = (state) => {
    return {
        addNewItemCardIsDisplayed: state.currentPlacemark.isDisplayed
    }
};



export default connect(mapStatesToProps)(App);