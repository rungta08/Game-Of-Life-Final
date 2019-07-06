import React from 'react';
import Cell from './Cell/Cell';
import './Generation.css'

function Generation(props){
    return(
        <div className='Generation'>
            <Cell cell = {0}/>
        </div>
    )
}

export default Generation;
