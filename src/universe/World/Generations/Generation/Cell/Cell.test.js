import React from 'react';
import {shallow} from "enzyme";
import Cell from "./Cell";


describe('Cell', () => {
    it('should render cell with white state', () => {
        const cellElement = shallow(<Cell cell={1}/>);
        const divElement = cellElement.find('div');

        const color = divElement.props().style.background;

        expect(color).toEqual('white')
    });

    it('should render', () => {
        const cellElement = shallow(<Cell cell={0}/>);
        const divElement = cellElement.find('div');

        const color = divElement.props().style.background;

        expect(color).toEqual('aqua')
    });
});
