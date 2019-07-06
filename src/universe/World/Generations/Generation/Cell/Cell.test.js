import React from 'react';
import {shallow} from "enzyme";
import Cell from "./Cell";



describe('Cell', () => {
    it('should render cell with white state', () => {
        const cellElement = shallow(<Cell/>);
        const divElement = cellElement.find('div');

        const color = divElement.props().style.background;

        expect(color).toEqual('white')
    });

    it('should render', () => {

    });
});
