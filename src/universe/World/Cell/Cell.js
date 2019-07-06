import React, {Component} from 'react';
import './Cell.css';
import PropTypes from 'prop-types';

class Cell extends Component {

    constructor(props){
        super(props);

        this.state = {
            bgColor: 'aqua'
        }
    }

    colorChange = () => {
        let bgColor = 'aqua';
        if(this.state.bgColor === 'aqua'){
            bgColor = 'white'
        }
        this.setState({
            bgColor: bgColor
        }, () => {
            console.log(this.state.bgColor);
        })
    };

    render() {
        return (
            <div style = {{background: this.state.bgColor}} className='cell' onClick = {this.colorChange}>

            </div>
        );
    }
}

Cell.propTypes = {};

export default Cell;
