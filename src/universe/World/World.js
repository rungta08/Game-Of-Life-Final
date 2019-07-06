import React from 'react';
import PropTypes from 'prop-types';
import Cell from "./Cell/Cell";

class World extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let cells = [];
        for(let i = 0; i < this.props.size;i++){
            cells.push(<Cell key={i} id={i} onClick = {this.addToLiveCells}/>)
        }
        return (
            <div>
                <div className="World">
                    {cells}
                </div>
            </div>
        );
    }
};

export default World;
World.propTypes = {};


