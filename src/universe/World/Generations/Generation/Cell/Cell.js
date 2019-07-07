import React from 'react';
import './Cell.css'
import PropTypes from 'prop-types';

const DEAD = 0;

function Cell(props) {

    let bgColor = props.cell === DEAD ? 'aqua' : 'white';

    return (
        <div className='Gen-Cell' style={{background: bgColor}}>

        </div>
    )
}

Cell.propTypes = {
    cell: PropTypes.number
};

export default Cell;
