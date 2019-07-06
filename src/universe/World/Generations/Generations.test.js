import React from 'react';
import {shallow} from "enzyme";
import Generations from "./Generations";
import Generation from './Generation/Generation'

describe('Generations', () => {
    it('should render generation', () => {
        const generationsElement = shallow(<Generations generations = {[1]}/>);
        const generationElement = generationsElement.find(Generation);

        expect(generationElement.length).toEqual(1)
    });

    it('should render multiple Generation', () => {
        const generatioinsElement = shallow(<Generations generations = {[1,2]}/>);
        const generationElement = generatioinsElement.find(Generation);

        expect(generationElement.length).toEqual(2);
    });
});
