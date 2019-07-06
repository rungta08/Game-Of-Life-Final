import React from 'react';
import './Cell.css'

function Cell(props){

    let bgColor = props.cell === 0?'aqua':'white';

    return(
        <div className='GenCell' style={{background: bgColor}}>

        </div>
    )
}

export default Cell;
