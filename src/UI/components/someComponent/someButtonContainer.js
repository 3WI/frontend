import React, {Component} from 'react';


export default class Some extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}></button>
        )
    }
}