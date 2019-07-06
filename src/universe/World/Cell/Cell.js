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
    render() {
        return (
            <div style = {{background: this.state.bgColor}} className='cell' >

            </div>
        );
    }
}

Cell.propTypes = {};

export default Cell;
