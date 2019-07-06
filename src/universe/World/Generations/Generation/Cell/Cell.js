import React from 'react';
import './Cell.css'

function Cell(props){

    let bgColor = props.cell === 0?'aqua':'white';

    return(
        <div className='Gen-Cell' style={{background: bgColor}}>

        </div>
    )
}

export default Cell;
