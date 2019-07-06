import React from 'react';
import PropTypes from 'prop-types';
import Cell from "./Cell/Cell";
import './World.css';

class World extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let cells = [];
        for(let i = 0; i < this.props.size;i++){
            cells.push(<Cell/>)
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


