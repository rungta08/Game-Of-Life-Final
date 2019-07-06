import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";
import World from './universe/World/World';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

  });

  it('should render world component', () => {
    const appElement = shallow(<App/>);
    expect(appElement.find(World).length).toEqual(1);
  });
});


