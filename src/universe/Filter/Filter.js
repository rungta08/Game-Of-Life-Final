import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    render() {
        return (
            <div className="Filter">
                <label>Size: </label><input id='size-input'
                        type = 'number'
                        min={0}
                        max={20}
                        defaultValue={10}
                        onChange = {this.changeSize}/>
                <br/>
                <br/>
                <label>Generations: </label><input id = 'generation-input'
                                                   type = 'number'
                                                   min={0}
                                                   max={20}
                                                   defaultValue={10}
                                                   onChange = {this.changeGeneration}/>
                <br/>
                <br/>
                <div>Alive Rules</div>
                <label>000: </label><input value="000" type="checkbox" onChange={this.handleChange}/>
                <label>001: </label><input value="001" type="checkbox" defaultChecked onChange={this.handleChange}/>
                <label>010: </label><input value="010" type="checkbox" defaultChecked onChange={this.handleChange}/>
                <label>011: </label><input value="011" type="checkbox" onChange={this.handleChange}/>
                <label>100: </label><input value="100" type="checkbox" onChange={this.handleChange}/>
                <label>101: </label><input value="101" type="checkbox" onChange={this.handleChange}/>
                <label>110: </label><input value="110" type="checkbox" onChange={this.handleChange}/>
                <label>111: </label><input value="111" type="checkbox" onChange={this.handleChange}/>
            </div>
        );
    }
}

Filter.propTypes = {};

export default Filter;
