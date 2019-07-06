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

    it('should render one checkbox', () => {
        const filterElement = shallow(<Filter/>);
        const inputField = filterElement.find('input').get(3);

        expect(inputField.props.type).toEqual('checkbox');
    });

    it('should render ten input fields', () => {
        const filterElement = shallow(<Filter/>);
        const inputField = filterElement.find('input');

        expect(inputField.length).toEqual(10);
    });



});
