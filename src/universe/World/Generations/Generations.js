import React from 'react';
import PropTypes from 'prop-types';
import Generation from "./Generation/Generation";

function Generations(props){
    return(
        <div className = 'Generations'>
            {props.generations.map((generation,index) =>
            <Generation key = {index} generation ={generation}/>
            )}
        </div>
    )
}

Generations.propTypes = {
    generations: PropTypes.array
}

export default Generations;
