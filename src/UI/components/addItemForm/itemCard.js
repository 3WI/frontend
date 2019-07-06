import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeAddNewItemCard} from "../../../BLL/store/action_creators/placemark";


class ItemCard extends Component {
    render() {
        return (
            <div>
                Форму верстать тут
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        item: state.currentPlacemark
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onClose() {
            dispatch(closeAddNewItemCard());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);