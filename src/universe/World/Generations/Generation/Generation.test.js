import React from 'react';
import {shallow} from "enzyme";
import Generation from "./Generation";
import Cell from './Cell/Cell';

describe('Generation', () => {
    it('should create cell', () => {
        const generationElement = shallow(<Generation/>);
        const cellElement = generationElement.find(Cell);

        expect(cellElement.length).toEqual(1);
    });


});
