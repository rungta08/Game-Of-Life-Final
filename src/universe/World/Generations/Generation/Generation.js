import React from 'react';
import Cell from './Cell/Cell';
import './Generation.css'

function Generation(props){
    return(
        <div className='Generation'>
            {props.generation.map((cell,index) =>
                <Cell key={index} cell = {cell}/>
            )}
        </div>
    )
}

export default Generation;
