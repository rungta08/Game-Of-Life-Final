import React from 'react';
import {shallow} from "enzyme";
import World from "./World";
import Cell from "./Cell/Cell";
import Generations from "./Generations/Generations";

describe('World', () => {
    it('should render cell', () => {
        const worldElement = shallow(<World size = {1}/>);

        expect(worldElement.find(Cell).length).toEqual(1);
    });

    it('should render cell based on size given by app component', () => {
        const worldElement = shallow(<World size = {2}/>);

        expect(worldElement.find(Cell).length).toEqual(2)
    });

    it('should make cell index active if Particular Cell Clicked', () => {
        const worldElement = shallow(<World size = {2}/>);
        const mockedCellLive = jest.fn();
        const cellElement = shallow(<Cell id = {2} onClick = {mockedCellLive}/>);

        cellElement.simulate('click');

        expect(mockedCellLive).toBeCalledWith(2);
    });

    it('should render generations', () => {
        const worldElement = shallow(<World size = {2}/>);
        const generationsElement = worldElement.find(Generations);

        expect(generationsElement.length).toEqual(1);
    });


});

