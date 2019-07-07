import React, {Component} from 'react';
import {connect} from 'react-redux';
import DumpMap from './map/map';
import ItemCard from './addItemForm/itemCard';
import EditItemCard from './editItemForm/editItemCard';
import FiltrationPanel from './filtrationPanel/filtrationPanel';
// import NotEditableItemCard from './filtrationPanel/notEditeditemCard';
import './App.module.css';


class App extends Component {
    render() {
        return (
            <div>
                <DumpMap />
                <FiltrationPanel />
                {this.props.addNewItemCardIsDisplayed && <ItemCard />}
                {this.props.editItemCardIsDisplayed && <EditItemCard />}
            </div>

        );
    }
}


const mapStatesToProps = (state) => {
    return {
        addNewItemCardIsDisplayed: state.currentPlacemark.isDisplayed,
        editItemCardIsDisplayed: state.currentPlacemark.isEditable,
    }
};



export default connect(mapStatesToProps)(App);