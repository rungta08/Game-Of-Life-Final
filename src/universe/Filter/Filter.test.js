import React from 'react';
import {shallow} from "enzyme";
import Filter from "./Filter";

describe('Filter', () => {
    it('should render size of world input field', () => {
        const filterElement = shallow(<Filter/>);
        const inputField = filterElement.find('#size-input')

        expect(inputField.length).toEqual(1);
    });

    it('should render no of generation input field', () => {
        const filterElement = shallow(<Filter/>);
        const inputField = filterElement.find('#generation-input')

        expect(inputField.length).toEqual(1);
    });


});
