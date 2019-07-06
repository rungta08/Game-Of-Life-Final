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

            </div>
        );
    }
}

Filter.propTypes = {};

export default Filter;
