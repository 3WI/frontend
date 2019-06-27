import React, {Component} from 'react';
import SomeButton from "./someButton";
import {getSomething} from "../../../BLL/store/action_creators/something";
import {connect} from 'react-redux';
import {urls} from "../../../BLL/store/constants";


class SomeButtonContainer extends Component {
    render() {
        return (
            <SomeButton onClick={() => this.props.onClick(urls.GET_SOMETHING_URL)}/>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick(url) {
            dispatch(getSomething(url));
        }
    }
};


export default connect(null, mapDispatchToProps)(SomeButtonContainer);