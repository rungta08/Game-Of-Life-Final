import React from 'react';
import {shallow} from "enzyme";
import Cell from './Cell';

describe('Cell', () => {
    it('should call color change when clicked', async () => {
        const colorChange = jest.fn();
        const cellElement = shallow(<Cell/>);
        const divElement = cellElement.find('div');
        divElement.simulate('click');

        expect(divElement.props().style.background).toEqual('aqua');

    });
});
