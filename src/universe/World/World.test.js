import React from 'react';
import {shallow} from "enzyme";
import World from "./World";
import Cell from "./Cell/Cell";

describe('World', () => {
    it('should render cell', () => {
        const worldElement = shallow(<World size = {1}/>);
        expect(worldElement.find(Cell).length).toEqual(1);
    });

    it('should render cell based on size given by app component', () => {
        const worldElement = shallow(<World size = {2}/>);
        expect(worldElement.find(Cell).length).toEqual(2)
    });
});

