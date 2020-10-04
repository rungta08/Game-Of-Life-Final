import React, {Component} from 'react';
import './Cell.css';
import PropTypes from 'prop-types';

class Cell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bgColor: 'white'
        }
    }

    colorChange = () => {
        this.props.onClick(this.props.id);
        let bgColor = 'white';
        if (this.state.bgColor === 'white') {
            bgColor = 'black'
        }
        this.setState({
            bgColor: bgColor
        })
    };

    render() {
        return (
            <div style={{background: this.state.bgColor}} className='cell' onClick={this.colorChange}>

            </div>
        );
    }
}

Cell.propTypes = {
    id: PropTypes.number,
    onClick: PropTypes.func
};

export default Cell;
