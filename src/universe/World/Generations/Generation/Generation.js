import React from 'react';
import Cell from './Cell/Cell';
import './Generation.css'
import PropTypes from 'prop-types';

function Generation(props){
    return(
        <div className='Generation'>
            {props.generation.map((cell,index) =>
                <Cell key={index} cell = {cell}/>
            )}
        </div>
    )
}

Generation.propTypes ={
    generation: PropTypes.array
}
export default Generation;
