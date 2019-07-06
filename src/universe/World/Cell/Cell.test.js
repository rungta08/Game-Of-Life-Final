import React from 'react';
import {shallow} from "enzyme";
import Cell from './Cell';

describe('Cell', () => {
    it('should call color change when clicked', () => {
        const colorChange = jest.fn();
        const cellElement = shallow(<Cell onClick = {colorChange}/>);

        cellElement.simulate('click');

        expect(colorChange).toHaveBeenCalled();

    });
});
