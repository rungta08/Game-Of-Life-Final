import React from 'react';
import './Cell.css'
import PropTypes from 'prop-types';

function Cell(props){

    let bgColor = props.cell === 0?'aqua':'white';

    return(
        <div className='Gen-Cell' style={{background: bgColor}}>

        </div>
    )
}

Cell.propTypes = {
    cell: PropTypes.number
}

export default Cell;
