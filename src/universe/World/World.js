import React from 'react';
import PropTypes from 'prop-types';
import Cell from "./Cell/Cell";
import './World.css';

class World extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            aliveCells: Array(this.props.size).fill(0),
        }
    }

    reverse = (value) => {
        if(value === 0)
            return 1;
        return 0;
    };

    addToLiveCells = (id) => {
        const aliveCells = this.state.aliveCells;
        aliveCells[id] = this.reverse(aliveCells[id]);
        this.setState({
            aliveCells : aliveCells
        });
    };

    render() {
        let cells = [];
        for(let i = 0; i < this.props.size;i++){
            cells.push(<Cell key = {i} id = {i} onClick={this.addToLiveCells}/>)
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


