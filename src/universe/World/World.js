import React from 'react';
import Cell from "./Cell/Cell";
import './World.css';
import Generations from "./Generations/Generations";
import Game from '../GameLogic/Game'

class World extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aliveCells: Array(this.props.size).fill(0),
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let aliveCells = this.state.aliveCells;
        if (parseInt(nextProps.size) > this.state.aliveCells.length) {
            aliveCells.push(0);
        }
        if (parseInt(nextProps.size) < this.state.aliveCells.length) {
            aliveCells.pop();
        }

        this.setState({
            aliveCells: aliveCells
        })
    }

    reverse = (value) => {
        if (value === 0)
            return 1;
        return 0;
    };

    addToLiveCells = (id) => {
        let aliveCells = this.state.aliveCells;
        aliveCells[id] = this.reverse(aliveCells[id]);
        this.setState({
            aliveCells: aliveCells
        });
    };

    render() {
        let cells = [];
        for (let i = 0; i < this.props.size; i++) {
            cells.push(<Cell key={i} id={i} onClick={this.addToLiveCells}/>)
        }
        return (
            <div>
                <div className="World">
                    {cells}
                </div>
                <br/>
                Generations:
                <Generations
                    generations={Game(this.state.aliveCells, this.props.numberOfGeneration, this.props.aliveRules)}/>
            </div>
        );
    }
}

export default World;


