import React from 'react';
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

export default Generations;