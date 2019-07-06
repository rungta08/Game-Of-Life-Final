import React from 'react';
import {shallow} from "enzyme";
import Generation from "./Generation";
import Cell from './Cell/Cell';

describe('Generation', () => {
    it('should create cell', () => {
        const generationElement = shallow(<Generation key={1} generation={[1]}/>);
        const cellElement = generationElement.find(Cell);

        expect(cellElement.length).toEqual(1);
    });

    it('should create multiple cell', () => {
        const generationElement = shallow(<Generation key={1} generation={[1, 0]}/>);
        const cellElement = generationElement.find(Cell);

        expect(cellElement.length).toEqual(2);
    });
});
