import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import LaunchPopOver from '../../components/LaunchPopOver';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe('Launch pop over component', () => {
  const wrapper = shallow(<LaunchPopOver flight="1" details="test details"  />);
  test('should render a button component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });

  test('should render a popover component', () => {
    expect(wrapper.find(Popover).length).toBe(1);
  });

  test('should render a PopoverHeader component', () => {
    expect(wrapper.find(PopoverHeader).length).toBe(1);
  });

  test('should render a PopoverBody component', () => {
    expect(wrapper.find(PopoverBody).length).toBe(1);
  });
});
