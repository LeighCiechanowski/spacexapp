import React from 'react';
import { shallow, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import LaunchTable from '../../components/LaunchTable';
import LaunchesSummaryListGroupContainer from '../../containers/LaunchesSummaryListGroup';
import { Table, Alert, Fade, Card, CardTitle, Row, Col, ListGroup, ListGroupItem, Badge, Container, ListGroupItemHeading, Button } from 'reactstrap';
const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe('Launch table component', () => {
    let props;
    let wrapper;
    
    describe('Loading', () => {
        beforeEach(() => {
            props = {
                launches: [],
                filteredLaunches: [],
                launchesHasErrored: false,
                launchesIsLoading: true
            }
            wrapper = shallow(<LaunchTable {...props} getLaunches={() => {}}  />);
        });
        // test('should render loading component', () => {
        //     expect(wrapper.find('some sort of loading componet??').length).toBe(1);
        // });
    });

    describe('With error', () => {
        beforeEach(() => {
            props = {
                launches: [],
                filteredLaunches: [],
                launchesHasErrored: true,
                launchesIsLoading: false
            }
            wrapper = shallow(<LaunchTable {...props} getLaunches={() => {}}  />);
        });
        test('should render Alert component if errored', () => {
            var alert = wrapper.find(Alert);
            expect(alert.length).toBe(1);
            expect(alert.props().color).toBe('danger');
            expect(alert.props().children).toBe('How embarassing.... we see to have hit a problem.');
        });
    });

    describe('Should render the components', () => {
        beforeEach(() => {
            props = {
                launches: [],
                filteredLaunches: [],
                launchesHasErrored: false,
                launchesIsLoading: false
            }
            wrapper = shallow(<LaunchTable {...props} getLaunches={() => {}}  />);
        });
        test('Launch Summary component', () => {
            expect(wrapper.find(LaunchesSummaryListGroupContainer).length).toBe(1);
        });
    });

    describe('Should render the info if no filtered launches', () => {
        beforeEach(() => {
            props = {
                launches: [],
                filteredLaunches: [],
                launchesHasErrored: false,
                launchesIsLoading: false
            }
            wrapper = shallow(<LaunchTable {...props} getLaunches={() => {}}  />);
        });

        test('Launch Summary component', () => {
            var alert = wrapper.find(Alert);
            expect(alert.length).toBe(1);
            expect(alert.props().color).toBe('info');
            expect(alert.props().children).toBe('Sorry old bean we couldn\'t find any launches which match what you are looking for');
        });
    });

    describe('Should correct number of rows', () => {
        beforeEach(() => {
            props = {
                filteredLaunches: mockLaunches
            }
        });

        test('Launch Summary component', () => {
            wrapper = shallow(<LaunchTable {...props} getLaunches={() => {}}   />);
            let rows = wrapper.find('tr');
            expect(rows.length).toBe(4);
            
            rows.forEach((row, index)=>{
                rows.forEach((column, index)=>{
                    console.log(column.text())
                })
            })
        });
    });
});





let mockLaunches =[
    {
      flight_number: 1,
      launch_year: '2006',
      rocket: {
        rocket_id: 'falcon1',
        rocket_name: 'Falcon 1',
        },
      launch_site: {
        site_id: 'kwajalein_atoll',
        site_name: 'Kwajalein Atoll',
        site_name_long: 'Kwajalein Atoll Omelek Island'
      },
      launch_success: false,
      details: 'Engine failure at 33 seconds and loss of vehicle'
    },
    {
        flight_number: 2,
        launch_year: '2006',
        rocket: {
          rocket_id: 'falcon1',
          rocket_name: 'Falcon 1',
          },
        launch_site: {
          site_id: 'kwajalein_atoll',
          site_name: 'Kwajalein Atoll',
          site_name_long: 'Kwajalein Atoll Omelek Island'
        },
        launch_success: false,
        details: 'Engine failure at 33 seconds and loss of vehicle'
      },
      {
        flight_number: 3,
        launch_year: '2006',
        rocket: {
          rocket_id: 'falcon1',
          rocket_name: 'Falcon 1',
          },
        launch_site: {
          site_id: 'kwajalein_atoll',
          site_name: 'Kwajalein Atoll',
          site_name_long: 'Kwajalein Atoll Omelek Island'
        },
        launch_success: false,
        details: 'Engine failure at 33 seconds and loss of vehicle'
      }
  ]
