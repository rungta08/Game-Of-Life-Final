import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Filter.css';


const DEFAULT_SIZE = 10;
const DEFAULT_GENERATION = 10;
const MAX_SIZE = 30;
const MAX_GENERATION = 20;
const MIN_SIZE = 0;
const MIN_GENERATION = 1;
const ONE_ELEMENT = 1;

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            size: 10,
            generation: 10,
            aliveRules: ['001', '010']
        }
    }

    handleChange = (event) => {
        const option = event.target.value;
        let aliveRules = this.state.aliveRules;
        if (aliveRules.includes(option)) {
            let index = aliveRules.indexOf(option);
            aliveRules.splice(index, ONE_ELEMENT);
        } else {
            aliveRules.push(option);
        }
        this.setState({
            aliveRules: aliveRules
        }, () => {
            this.props.onChange(this.state.size, this.state.generation, this.state.aliveRules)
        })

    };

    changeSize = (event) => {
        const size = event.target.value;
        this.setState({
            size: size
        }, () => {
            this.props.onChange(this.state.size, this.state.generation, this.state.aliveRules)
        })
    };

    changeGeneration = (event) => {
        const generation = event.target.value;
        this.setState({
            generation: generation
        }, () => {
            this.props.onChange(this.state.size, this.state.generation, this.state.aliveRules)
        })

    };

    restrict = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="Filter">
                <label>Size: </label><input id='size-input'
                                            type='number'
                                            min={MIN_SIZE}
                                            max={MAX_SIZE}
                                            defaultValue={DEFAULT_SIZE}
                                            onChange={this.changeSize} onKeyDown={this.restrict}
                                            onKeyUp={this.restrict}/>
                <br/>
                <br/>
                <label>Generations: </label><input id='generation-input'
                                                   type='number'
                                                   min={MIN_GENERATION}
                                                   max={MAX_GENERATION}
                                                   defaultValue={DEFAULT_GENERATION}
                                                   onChange={this.changeGeneration} onKeyDown={this.restrict}
                                                   onKeyUp={this.restrict}/>
                <br/>
                <br/>
                <div>Alive Rules</div>
                <label>000: </label><input value="000" type="checkbox" onChange={this.handleChange}/>
                <br/>
                <label>001: </label><input value="001" type="checkbox" defaultChecked onChange={this.handleChange}/>
                <br/>
                <label>010: </label><input value="010" type="checkbox" defaultChecked onChange={this.handleChange}/>
                <br/>
                <label>011: </label><input value="011" type="checkbox" onChange={this.handleChange}/>
                <br/>
                <label>100: </label><input value="100" type="checkbox" onChange={this.handleChange}/>
                <br/>
                <label>101: </label><input value="101" type="checkbox" onChange={this.handleChange}/>
                <br/>
                <label>110: </label><input value="110" type="checkbox" onChange={this.handleChange}/>
                <br/>
                <label>111: </label><input value="111" type="checkbox" onChange={this.handleChange}/>
            </div>
        );
    }
}

Filter.propTypes = {
    onChange: PropTypes.func,
};

export default Filter;
